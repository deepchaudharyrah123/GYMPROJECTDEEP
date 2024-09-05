import express from 'express';
import User from '../models/UserModel.js'; 
import Email from '../models/EmailModel.js'; 
import { getAllEmails, getAllUsers } from '../controllers/adminController.js';


const router = express.Router();

router.get('/emails', getAllEmails);
router.get('/users', getAllUsers);


router.get('/counts', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const emailCount = await Email.countDocuments();

    res.status(200).json({
      userCount,
      emailCount,
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
