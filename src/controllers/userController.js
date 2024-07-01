import sequelize from "../models/connect.js";
import initModels from '../models/init-models.js'

let model=initModels(sequelize);

const addUserOder=async (req,res)=>{
    try{
        const {food_id}=req.params;
        const {user_id,amount,code,arr_sub_id}=req.body;
        const foodExist=await model.food.findOne({where:{food_id}});
        if(!foodExist) return  res.status(400).json({message:"Food không tồn tại"});
        const addOrder=  await model.order_food.create({
            user_id,
            food_id:foodExist.food_id,
            amount,

            code,
            arr_sub_id
        })
        const data=await model.order_food.findOne({
            attributes:{
                exclude:['user_id',"food_id"],
            },
            where:{
                id_order:addOrder.id_order
            }
        })
        res.status(200).json({
            message:"Xử lí thành công",
            data
         
        })
    }catch(e){
        res.status(400).json({message:"Xử lí thất bại"})
    }
}

export {
    addUserOder
}