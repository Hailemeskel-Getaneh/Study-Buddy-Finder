import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


const app = express();
dotenv.config()
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL)
.then(()=>console.log('Database connected successfully'))
.catch(err => {
    console.log("Database connection failed", err)
})

app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send('study-buddy finder API is running')
})
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

