import db from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'dotenv'
config.config();
//create main Model

const User = db.users

//1. user register

const userRegistration = async(req, res)=>{
    try{
        console.log(req.body);
        //get all the data from body
       const { firstname,lastname,email,password} =  req.body;

         //all the data should exists
         if(!(firstname && lastname && email && password) ){
            res.status(400).send("All fields are required")
         }

         //check if the user is already registered
         let existingUser= await User.findOne({where:{email:email}});
         if(existingUser){
            res.status(400).send("The user already exists with this email")
         }

         //Encrypt the password
          const myEncPassword = await bcrypt.hash(password,10)

          //Save the User to the database
       const user = await User.create({
             firstname:firstname,
             lastname:lastname,
             email:email,
             password:myEncPassword});

        // generate a token for user and send it
        let token = jwt.sign(
            {id:user.id, email:user.email},
            process.env.jwtsecret,
            {
                expiresIn:"2h"
            }
        );
       // appending the token to the user object
        user.token = token;

        //dont send the password to the client
         user.password = undefined;
       res.status(201).json(user)

    }catch(err){
    console.log(err);
    }
   
}


const userLogin = async(req, res) => {
   try {
      //get data from the frontend
      const {email,password} = req.body;
      if(!(email && password)){
        res.status(400).send('fields are required')
      }
      //find user in DB
      let user = await User.findOne({where:{email:email}});
      if(!user){
        res.status(404).send('User not found');
      }
      let isPasswordMatched =(await bcrypt.compare(password, user.password))

      //Match the password (result:boolean value)
      if(!isPasswordMatched){
        res.status(400).send("Wrong password")

      }else{

               const token=  jwt.sign({
                    id:user.id,
                    email:user.email
                },
                process.env.jwtsecret,
                    {
                        expiresIn:"2h"
                    }
                );
                user.password = undefined
                user.token = token 

               //send the token to user cookies
               //cookie section 
               const options ={
                expires: new Date(Date.now()+3 *24*60*60*1000),
                httpOnly: true , // makes cookies secure, only server can manipulate cookies.
               }

               res.status(200).cookie("token", user.token,options).json({success:true,token:user.token,email:user.email})
      }

   } catch (error) {
    console.log(error);
   }
}

export default  {userRegistration, userLogin}