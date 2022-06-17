//This handles the users route

//Libraries 
import express from "express"
import { createUser, getUser, getUserById, deleteUser, patchUser } from "../controllers/users.js"

//Declaring the neccessary variables
const router = express.Router()

//All routes here are starting from users
router.get("/", getUser) //This handles the get request

router.post("/", createUser) //This handles the post request

router.get("/:id", getUserById)  //This handles the route for getting any param that will be passed in

router.delete("/:id", deleteUser) //This handles the routing for deleting

router.patch("/:id", patchUser) //This handles the routing for patch 

export default router