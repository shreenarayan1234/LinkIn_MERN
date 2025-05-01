import express from 'express';
import { getCurrentUser } from '../controllers/user.controllers.js';
import isAuth from '../middlewares/isAuth.js';

const userRouter = express.Router();
userRouter.get('/currentuser', isAuth, getCurrentUser);

export default userRouter;