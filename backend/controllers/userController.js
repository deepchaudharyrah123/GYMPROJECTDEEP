import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields',
    });
  }

  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    const newUser = new User({
      name, email, password,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
    });
  } catch {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both email and password',
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !(password, user.password)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      token,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (password) {
      user.password;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
// await call to a function or variable that returns