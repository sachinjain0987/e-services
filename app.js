import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { router as userRoutes } from './routes/userRoutes.js';
import { connectUserDB } from './config/dbUser.js';
const app = express();
app.use(cors());
app.use(express.json());  
app.use('/api/users', userRoutes);
connectUserDB();
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
