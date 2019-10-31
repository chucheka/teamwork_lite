import pool from './pool';

const articlesTable = `DROP TABLE IF EXISTS articles CASCADE;
CREATE TABLE articles(
    "articleId" SERIAL PRIMARY KEY NOT NULL,
   "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    article VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
)
`;

async function createArticlesTable() {
	try {
		const response = await pool.query(articlesTable);
		console.log('Articles table table has been created');
	} catch (error) {
		console.log(error.stack);
	}
}
createArticlesTable();
