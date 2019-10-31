import express from 'express';
import dotenv from 'dotenv';
import pool from './config/pool';

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,PATCH,OPTIONS');
  next();
});
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'success'
  });
});
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/api/v1`);
});

export default app;
