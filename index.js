import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './router/router.js'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

app.use('/posts', router)

app.listen(5000, () => {
  mongoose
    .connect('mongodb+srv://aamirRage:rt4zlDVJHGXIpLqU@rage.ry9pozt.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('connected to db'))
    .catch((err) => console.log(err))
})
