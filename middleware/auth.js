
import jwt from 'jsonwebtoken';
import config from 'dotenv'
config.config();


const auth = (req,res, next) =>{

    //grab token from cookie
   console.log(req.cookies)
   const {token} = req.cookies

   //if no token , stop there
   if(!token){
       res.status(403).send('Please login first')
   }

   try {

    //decode the token
    const decode = jwt.verify(token, process.env.jwtsecret)
    console.log(decode);
    req.user = decode;
   } catch (error) {
    console.log(error)
    res.status(401).send('Invalid token')
   }


    return next();
}

export default auth;