import userController from "../controllers/userController.js";

import express from 'express';
const router =  express.Router();

router.post('/userRegistration',userController.userRegistration);

router.get('/userLogin',userController.userLogin);

let userRouter = {};
userRouter.router = router;
export default userRouter;