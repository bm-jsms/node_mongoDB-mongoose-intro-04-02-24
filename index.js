import express from 'express';
import connectDB from './db/connectDB';

const app = express();
const port = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.listen(port, () => console.log(`Server running on port ${port}`));
