![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

# REST API using Nodejs , Express as middleware , Sequelize ORM and Mysql DataBase 

## Install Dependencies 
  > **npm install**

## Run application 
  > **npm run dev**


### Sample API's are 
1. **POST** : Add a product
   
   >  ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/2eed57a7-c4e7-479f-ab92-dd25959506a2)

2. **GET** : get All products
   
   >  ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/2aec01f3-0724-4ac7-bfea-10f90d5a4eb7)

   
3. **GET** : get single product

   >  ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/7118183a-5049-4198-ab1f-89d5b638af2e)

4. **GET** : get all published products

   >  ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/e1a2fc3c-67a8-40f6-9d9f-3cda3736f2c2)

5. **PUT** : update a product

   >  ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/21230bef-792d-477a-98cd-fd63df9f1bd5)

6. **DELETE** : delete a product

   >  ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/99996315-475f-4bcd-b311-7d3e01f4fe9b)


# User Registration and Login using JWT token
## Use bcrypt.js package for encryption and cookie-parser package for handling cookies.
   ### Install following packages
       npm i bcryptjs
       npm i jsonwebtoken
       npm i cookie-parser
  ### Import and Use above packages
      1. Encrypt the password before saving the user information into DB
         import bcrypt from 'bcryptjs'
         await bcrypt.hash(password,10)

      2. Match the password while login 
         await bcrypt.compare(password, user.password)
         
      3. Generate the JWT token and send the token to user cookie 
         import express from 'express';
         import cookieParser from 'cookie-parser';
         import jwt from 'jsonwebtoken'

         const app = express();
         //middleware
         app.use(cookieParser());

         
         let token = jwt.sign(
            {id:user.id, email:user.email},
            process.env.jwtsecret,
            {
                expiresIn:"2h"
            }
          );

          const options ={
                expires: new Date(Date.now()+3 *24*60*60*1000),
                httpOnly: true , // makes cookies secure, only server can manipulate cookies.
               }

               res.status(200).cookie("token", user.token,options).json({success:true,token:user.token,user:user})
               
  ## Register and Login API's

   1. **POST** : Register a user

      > ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/2e8c9c48-0be0-4c9e-b949-865e912afa3c)

   2. **GET** : Login with email and password

      > ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/de7e54de-b918-4120-8636-df6523b4c632)

      **Cookie is set with Token at Client**

      > ![image](https://github.com/Nagamma06/REST_API_Nodejs_Express_Mysql_Sequelize/assets/64766095/693f61b7-e28a-45de-94b8-e6fdaa766fbd)

      


          
      
    
   

   
