import User from '../models/UserModel.js';
import Email from '../models/EmailModel.js';

export const getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json({ success: true, emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// async provides straight-forward,