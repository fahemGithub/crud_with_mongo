import express from "express";
import mongoose from "mongoose";
import userRouter from "./route/User-route.js";

const app = express();
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("home")
})

// app.use('/api/users', userRouter)

mongoose.connect('mongodb+srv://fahemeducaton:Qwerty123456789@cluster0.br1cqsp.mongodb.net/')
        .then(() => app.listen(port))
        .then(() => console.log(`connexion a mongodb a reusse sur ${port}`))
        .catch(()=> console.log(`error serveur`))

