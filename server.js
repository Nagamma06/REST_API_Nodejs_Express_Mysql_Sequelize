import express from 'express';
import cors from 'cors';
import router from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';


import cookieParser from 'cookie-parser';

const app = express();
//app.use(cors);


//in all the API we are getting response in JSON format
app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use(cookieParser());

//routers
app.use('/api/products', router);
app.use('/api/users', userRouter.router);

//testing api

app.get('/',(req, res) => {
    res.send({message:'Hello from API'})
})

const PORT = process.env.PORT || 8080;
//server
app.listen(PORT,() =>{
    console.log('listening on port '+PORT);
})