import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import emailRoutes from './routes/emailRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

config({ path: './config.env' });

connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/email', emailRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
