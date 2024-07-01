import express from 'express'
import { addUserOder } from '../controllers/userController.js';
const userRouter=express.Router();

userRouter.post("/post-order/:food_id",addUserOder)
export default userRouter