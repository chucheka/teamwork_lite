import express from 'express';
import authRouter from '../api/routes/user/user';
import articleRouter from '../api/routes/articles/articles';
import gifRouter from '../api/routes/gifs/gifs';
import feedRouter from '../api/routes/feed/feed';
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

app.use('/api/v1/auth', authRouter);
app.use('/api/v1', articleRouter);
app.use('/api/v1', gifRouter);
app.use('/', feedRouter);
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}/api/v1`);
});

export default app;
