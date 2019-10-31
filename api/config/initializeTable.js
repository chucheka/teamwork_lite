import pool from './pool';

const user = {
	firstName: 'Chike',
	lastName: 'Ucheka',
	email: 'ryanucheka@gmail.com',
	password: 'chike22ucheka',
	password2: 'chike22ucheka',
	gender: 'Male',
	jobRole: 'Senior Engineer',
	departmant: 'IT',
	address: 'Area M World Bank Housing Estate'
};
const articleObj = {
	title: 'Complete Guide to React',
	article: 'React hooks enable you use state with functional components'
};

const gifObj = {
	title: 'Complete Guide to React',
	imageUrl: '/http://cloudinary.io/images/avatar.png'
};

const createUser = `INSERT INTO users("firstName","lastName",email,password,gender,"jobRole",department,address) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
const userValues = [
	user.firstName,
	user.lastName,
	user.email,
	user.password,
	user.gender,
	user.jobRole,
	user.departmant,
	user.address
];
const Comment = {
	authourId: 1,
	articleId: 1,
	gifId: 1,
	comment: 'Nice article dear'
};
// Create Article
const createArticle = `INSERT INTO articles(article,title) VALUES($1,$2) RETURNING *`;
const articleValues = [ articleObj.article, articleObj.title ];
// Create Gif
const createGif = `INSERT INTO gifs(title,"imageUrl") VALUES($1,$2) RETURNING *`;
const gifValues = [ gifObj.imageUrl, gifObj.title ];

const createComment = `INSERT INTO comments("authourId","articleId","gifId",comment) VALUES($1,$2,$3,$4) RETURNING *`;
const commentValues = [ Comment.authourId, Comment.articleId, Comment.gifId, Comment.comment ];

async function initializeUser() {
	try {
		const result = await pool.query(createUser, userValues);
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

async function initializeArticle() {
	try {
		const result = await pool.query(createArticle, articleValues);
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

async function initializeGif() {
	try {
		const result = await pool.query(createGif, gifValues);
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

async function initializeComment() {
	try {
		const result = await pool.query(createComment, commentValues);
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

async function initializer(queryText, queryValue) {
	try {
		const result = await pool.query(queryText, queryValue);
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

initializer(createUser, userValues);
initializer(createArticle, articleValues);
initializer(createGif, gifValues);
initializer(createComment, commentValues);
