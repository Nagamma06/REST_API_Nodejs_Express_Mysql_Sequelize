import express from 'express';
import cors from 'cors';
import router from './routes/productRouter.js';
const app = express();
app.use(cors);


//in all the API we are getting response in JSON format
app.use(express.json());

app.use(express.urlencoded({ extended:true }));


//routers
app.use('/api/products', router)


//testing api

app.get('/',(req, res) => {
    res.send({message:'Hello from API'})
})

const PORT = process.env.PORT || 8080;
//server
app.listen(PORT,() =>{
    console.log('listening on port '+PORT);
})