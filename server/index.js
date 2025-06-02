import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app =express();





app.use(cors({
  origin: ['http://localhost:3000', 'https://file-sharing-2-em6a.onrender.com'],
  credentials: true
}));

app.use(express.json());
app.use('/',router);
const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT,() => console.log(`server is running oon 8000 port ${PORT}`));



export default PORT;