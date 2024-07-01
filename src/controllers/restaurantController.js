import sequelize from "../models/connect.js";
import initModels from '../models/init-models.js'

let model=initModels(sequelize);
//add like 
const addLikeRestaurant=async(req,res)=>{
    try{
        const {res_id}=req.params;
        const {user_id,date_like}=req.body
        const resExist=await model.restaurant.findOne({where:{res_id}});
        if(!resExist) return res.status(400).json({message:"Restaurant khong6 ton tai"})
    const addLikeRestaurant=  await model.like_res.create({
            user_id,
            res_id:resExist.res_id,
            date_like

        })
        const data=await model.like_res.findOne({
            attributes:{
                exclude:['user_id',"res_id","date_like"],
            },
            where:{
                id_like:addLikeRestaurant.id_like
            }
        })
        res.status(200).json({
            message:"Xử lí thành công",
            data
        })
        }catch(e){
        res.status(400).json({message:"Xu li that bai"})
    }
}

// add dislike
const addDislikeRestaurant=async(req,res)=>{
    try{
        const {res_id}=req.params;
        const {user_id,date_like}=req.body
        const resExist=await model.restaurant.findOne({where:{res_id}});
        if(!resExist) return res.status(400).json({message:"Restaurant khong6 ton tai"})
    const addDislikeRestaurant=  await model.dislike_res.create({
            user_id,
            res_id:resExist.res_id,
            date_like

        })
        const data=await model.dislike_res.findOne({
            attributes:{
                exclude:['user_id',"res_id","date_like"],
            },
            where:{
                id_dislike:addDislikeRestaurant.id_dislike
            }
        })
        res.status(200).json({
            message:"Xử lí thành công",
            data
        })
        }catch(e){
        res.status(400).json({message:"Xu li that bai"})
    }
}
// lấy like nhà hàng
const getLikeRestaurant=async(req,res)=>{
    try{
       const {res_id}=req.params;
       const resExist=await model.restaurant.findOne({where:{res_id}});
       if(!resExist) return res.status(400).json({message:"Restaurant khong6 ton tai"});
       const listLikeRes=await model.like_res.findAll({
        attributes:['user_id','res_id','date_like'],
        where:{
            res_id:resExist.res_id
        }
       })
       res.status(200).json({
        message:"getLikeRestaurant",
        data:{
            ...resExist.dataValues,
            listLikeRes,
        }
       })
    }catch(e){
        console.log(e);
    }
}


// lấy like user
const getLikeUser=async (req,res)=>{
    try{
       const {user_id}=req.params;
       const userExist=await model.user.findOne(
        
           {
               attributes:{
                   exclude:["password"],
               }, 
               
               where:{user_id}
       
       }
       
       
       );
       if(!userExist) return res.status(400).json({message:"Restaurant khong6 ton tai"})
       const listRateUsers=await model.like_res.findAll({
        attributes:['user_id','res_id','date_like'],
           where:{
               user_id:userExist.user_id,
           },
     
          
       })
      res.status(200).json({
       message:"getRateUser",
       data:{
           ...userExist.dataValues,
           listRateUsers,
       }
      })
   

    }catch(e){
       console.log(e);
       res.status(400).json({message:"Xu li that bai"})
    }
}

// thêm đánh giá


const addRateRestaurant=async(req,res)=>{
    try{
        const {idUser,idRestaurant,amount}=req.body;
        console.log(idUser,idRestaurant,amount);
     const addRate=  await model.rate_res.create({
            user_id:idUser,
            res_id:idRestaurant,
            amount

        })
   
        res.status(200).json({
            message:"Xử lí thành công",
         
        })
    }catch(e){
        res.status(400).json({
            message:"Xử lí thất bại",
          
        })
    }
}
// lay danh gia theo nha hang
const getRateRestaurant=async (req,res)=>{
     try{
        const {res_id}=req.params;
        const resExist=await model.restaurant.findOne({where:{res_id}});
        if(!resExist) return res.status(400).json({message:"Restaurant khong6 ton tai"})
        const listRateRes=await model.rate_res.findAll({
            attributes:["user_id","amount","date_rate"],
            where:{
                res_id:resExist.res_id,
            },
           
        })
       res.status(200).json({
        message:"getRateRestaurant",
        data:{
            ...resExist.dataValues,
            listRateRes,
        }
       })
    

     }catch(e){
        console.log(e);
        res.status(400).json({message:"Xu li that bai"})
     }
}
const getRateUser=async (req,res)=>{
     try{
        const {user_id}=req.params;
        const userExist=await model.user.findOne(
         
            {
                attributes:{
                    exclude:["password"],
                }, 
                
                where:{user_id}
        
        }
        
        
        );
        if(!userExist) return res.status(400).json({message:"Restaurant khong6 ton tai"})
        const listRateUsers=await model.rate_res.findAll({
            attributes:["res_id","amount","date_rate"],
            where:{
                user_id:userExist.user_id,
            },
            include:[
                {
                    model:model.restaurant,
                    as:"re"
                }
            ]
           
        })
       res.status(200).json({
        message:"getRateUser",
        data:{
            ...userExist.dataValues,
            listRateUsers,
        }
       })
    

     }catch(e){
        console.log(e);
        res.status(400).json({message:"Xu li that bai"})
     }
}
export {
    getLikeUser,
    getRateRestaurant,
    
    getRateUser,addRateRestaurant,
    getLikeRestaurant,
    addLikeRestaurant,
    addDislikeRestaurant
}