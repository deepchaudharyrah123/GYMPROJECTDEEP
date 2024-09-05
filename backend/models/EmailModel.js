import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Email = mongoose.model('Email', emailSchema);

export default Email;
