import express from 'express';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDocument from '../swagger.json';
import authRouter from './routes/user/user';
import articleRouter from './routes/articles/articles';
import gifRouter from './routes/gifs/gifs';
import feedRouter from './routes/feed/feed';
import commentRouter from './routes/comments/comments';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,PATCH,OPTIONS');
	next();
});

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'success'
	});
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1', articleRouter);
app.use('/api/v1', gifRouter);
app.use('/api/v1', feedRouter);
app.use('/api/v1', commentRouter);

// Error Handling
app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res) => {
	res.status(error.status || 500);
	res.json({
		status: 'error',
		error: error.message.split(' ')[0]
	});
});
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}/api/v1`);
});

export default app;
