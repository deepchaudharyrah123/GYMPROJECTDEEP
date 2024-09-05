import express from 'express';
import { deleteReservation, getEmail, saveEmail } from '../controllers/emailController.js';

const router = express.Router();

router.post('/send/mail', saveEmail);
router.get('/emails',getEmail);
router.delete('/:id', deleteReservation);

export default router;
