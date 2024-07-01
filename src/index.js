import express, { request, response } from 'express'
import restaurantRouter from './routers/restaurantRouter.js';
import userRouter from './routers/userRouter.js';


const app=express();
app.use(express.json()); // Add body-parsing middleware

app.get('/test',(req,res)=>{
res.send("Hello World")
})
app.use("/restaurant",restaurantRouter)
app.use("/user",userRouter)
app.listen(8080);