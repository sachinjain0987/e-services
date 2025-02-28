import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

router.post('/userlogin', userController.userlogin);
router.post('/createuser', userController.createUser);

export { router };
