
import express from 'express'
import { getRateRestaurant,getRateUser,addDislikeRestaurant,addRateRestaurant,addLikeRestaurant,getLikeUser,getLikeRestaurant } from '../controllers/restaurantController.js';
const restaurantRouter=express.Router();

restaurantRouter.post("/post-like/:res_id",addLikeRestaurant);
restaurantRouter.post("/post-unlike/:res_id",addDislikeRestaurant);
restaurantRouter.get("/get-like-restaurant/:res_id",getLikeRestaurant);
restaurantRouter.get("/get-like-user/:user_id",getLikeUser);


restaurantRouter.get("/get-rate-restaurant/:res_id",getRateRestaurant);
restaurantRouter.get("/get-rate-user/:user_id",getRateUser);
restaurantRouter.post("/create-rate",addRateRestaurant)


export default restaurantRouter