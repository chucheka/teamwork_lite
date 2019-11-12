import pool from '../config/pool';
import { userTable, createUserQuery } from './users/sql';
import { articlesTable, createArticleQuery } from './articles/sql';
import { gifsTable, createGifsQuery } from './gifs/sql';
import { commentsTable, createCommentQuery } from './comments/sql';
async function createTable(queryText, tableName) {
	try {
		const response = await pool.query(queryText);
		console.log(`${tableName} table has be created`);
	} catch (error) {
		console.log(error.stack);
	}
}

async function queryRunner(queryText, queryValue) {
	try {
		const result = await pool.query(queryText, queryValue);
	} catch (error) {
		console.log(error.stack);
	}
}

const arrayOfQueries = [ userTable, articlesTable, gifsTable, commentsTable ];
arrayOfQueries.forEach((query) => {
	createTable(query, 'User');
});
// createTable(userTable, 'User');
// createTable(articlesTable, 'Artilce');
// createTable(gifsTable, 'Gif');
// createTable(commentsTable, 'Comment');
// queryRunner(createUserQuery.createUser, createUserQuery.userValues);
// queryRunner(createArticleQuery.createArticle, createArticleQuery.articleValues);
// queryRunner(createGifsQuery.createGif, createGifsQuery.gifValues);
