import pool from '../config/pool';
import { userTable, createUserQuery, dropUserTable } from './users/sql';
import { articlesTable, createArticleQuery, dropArticleTable } from './articles/sql';
import { gifsTable, createGifsQuery, dropGifTable } from './gifs/sql';
import { commentsTable, createCommentQuery, dropCommentTable } from './comments/sql';
async function createTable(queryText, tableName) {
	try {
		const response = await pool.query(queryText);
		console.log(`${tableName} table has be created`);
	} catch (error) {
		console.log(error.stack);
	}
}

// async function queryRunner(queryText, queryValue) {
// 	try {
// 		const result = await pool.query(queryText, queryValue);
// 	} catch (error) {
// 		console.log(error.stack);
// 	}
// }

createTable(userTable, 'User');

createTable(articlesTable, 'Artilces');

createTable(gifsTable, 'Gifs');

createTable(commentsTable, 'Comments');
