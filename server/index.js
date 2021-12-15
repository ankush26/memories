import express from "express";
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import cors from 'cors';

const app = express()
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes)

mongoose.connect('mongodb+srv://ankush:ankush@cluster0.72bbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(()=>app.listen(port, ()=>{console.log(`Server Listening on port ${port}`)}))
  .catch((error)=>console.log(error))  
