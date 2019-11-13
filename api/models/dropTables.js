import pool from '../config/pool';
import { dropUserTable } from './users/sql';
import { dropArticleTable } from './articles/sql';
import { dropGifTable } from './gifs/sql';
import { dropCommentTable } from './comments/sql';

async function dropTable(queryText, tableName) {
	try {
		const response = await pool.query(queryText);
		console.log(`${tableName} table has be dropped`);
	} catch (error) {
		console.log(error.stack);
	}
}
dropTable(dropUserTable, 'User');
dropTable(dropArticleTable, 'Articles');
dropTable(dropGifTable, 'Gifs');
dropTable(dropCommentTable, 'Comments');
