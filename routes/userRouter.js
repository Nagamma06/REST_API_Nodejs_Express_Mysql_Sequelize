import userController from "../controllers/userController.js";
import dashboardController from '../controllers/dashboardController.js';
import auth from '../middleware/auth.js';

import express from 'express';
const router =  express.Router();

router.post('/userRegistration',userController.userRegistration);

router.get('/userLogin',userController.userLogin);

router.get('/dashboard',auth,dashboardController.getDashboard);


let userRouter = {};
userRouter.router = router;
export default userRouter;