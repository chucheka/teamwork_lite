import pool from '../config/pool';
import { userTable, createUserQuery } from './users/sql';
import { articlesTable, createArticleQuery } from './articles/sql';
import { gifsTable, createGifsQuery } from './gifs/sql';
import { commentsTable, createCommentQuery } from './comments/sql';
async function createTable(queryText) {
	try {
		const response = await pool.query(queryText);
		console.log('article table created');
	} catch (error) {
		console.log(error.stack);
	}
}

async function queryRunner(queryText, queryValue) {
	try {
		const result = await pool.query(queryText, queryValue);
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

createTable(userTable);
createTable(articlesTable);
createTable(gifsTable);
createTable(commentsTable);
// queryRunner(createUserQuery.createUser, createUserQuery.userValues);
// queryRunner(createArticleQuery.createArticle, createArticleQuery.articleValues);
// queryRunner(createGifsQuery.createGif, createGifsQuery.gifValues);

// setTimeout(() => {
// 	queryRunner(createCommentQuery.createComment, createCommentQuery.commentValues);
// }, 1000);
