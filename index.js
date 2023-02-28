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

mongoose
  .connect('mongodb+srv://aamirRage:rt4zlDVJHGXIpLqU@rage.ry9pozt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
});
export default app
/* app.listen(5000, () => {
  mongoose
    .connect('mongodb+srv://aamirRage:rt4zlDVJHGXIpLqU@rage.ry9pozt.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('connected to db'))
    .catch((err) => console.log(err))
}) */
