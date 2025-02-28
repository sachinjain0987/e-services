import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();

const poolUser = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  const connectUserDB = async () => {
    try {
        await poolUser.connect();
        console.log('Connected to User database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

  export { poolUser,connectUserDB };