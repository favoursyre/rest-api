//This handles the functions of the various routes

//Useful libraries that I would be working with -->
import { v4 as uuidv4 } from "uuid"

//Declaring the various variables
//Mock Users
let users = [
    {
        firstName: "Syre",
        lastName: "Uchiha",
        skill: "Sharigan User",
        id: uuidv4()
    },
    {
        firstName: "Syre",
        lastName: "Wick",
        skill: "Assassin",
        id: uuidv4()
    },
    {
        firstName: "Syre",
        lastName: "Chi",
        skill: "Taijutsu Master",
        id: uuidv4()
    },
    {
        firstName: "Lil",
        lastName: "Syre",
        skill: "Fresh-Kid",
        id: uuidv4()
    },
    {
        firstName: "Syre",
        lastName: "Musk",
        skill: "Nerd",
        id: uuidv4()
    },
    {
        firstName: "Syre",
        lastName: "Parker",
        skill: "Friendly Neighbourhood Spiderman",
        id: uuidv4()
    }
]

//This handles the function for creating the users
export const createUser = (req, res) => {
    console.log("Post route reached")
    console.log(req.body)
    // const user = req.body()
    users.push({ ...req.body, id: uuidv4() })
    // res.send(`${user} added successfully`)
    res.send("sent")
}

//This handles the function for getting the user
export const getUser = (req, res) => { 
    console.log(users)
    res.send(users)
}

//This handles the function for getting user through id
export const getUserById = (req, res) => { 
    res.send(req.params)
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}   

//This handles the function for deleting
export const deleteUser = (req, res) => { 
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with the id ${id} deleted from the database`)
}

//This handles the function for patching
export const patchUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, skill } = req.body
    const user = users.find((user) => user.id === id)
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (skill) user.skill = skill
    console.log(user.firstName, user.lastName, user.skill)
    res.send(`User with id ${id} has been updated`)
}