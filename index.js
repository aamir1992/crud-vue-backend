import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './router/router.js'

var corsOptions = {
  origin: "https://crud-vue-frontend-ten.vercel.app"
};

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

dotenv.config()

app.use('/posts', router)

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(5000, () => {
  mongoose
    .connect('mongodb+srv://aamirRage:rt4zlDVJHGXIpLqU@rage.ry9pozt.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('connected to db'))
    .catch((err) => console.log(err))
})
