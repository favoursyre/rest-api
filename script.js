//I want to learn how to create a Rest API using Node JS + Express JS

//Useful libraries that I would be working with -->
import express from "express"
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"

//API: Application Programming Interface is a set of rules that allows programs to talk to each other
console.log("REST API \n")

const app = express()
const PORT = process.env.PORT || 5000
app.use(bodyParser.json())
app.use("/users", usersRoutes)
app.get("/", (req, res) => res.send("Hello from Homepage!"))


app.listen(PORT, () => console.log(`Server running on port --> http://localhost:${PORT}`))
