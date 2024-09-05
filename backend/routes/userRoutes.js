import express from 'express';
import { signup, login, deleteUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.delete('/users/:userId', deleteUser);
router.put('/users/:userId', updateUser);

export default router;
