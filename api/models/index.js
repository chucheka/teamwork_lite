import pool from '../config/pool';
import { userTable } from './users/sql';
import { articlesTable } from './articles/sql';
import { gifsTable } from './gifs/sql';

async function createTable(queryText, tableName) {
	try {
		const response = await pool.query(queryText);
		console.log(`${tableName} table has be created`);
	} catch (error) {
		console.log(error.stack);
	}
}

createTable(userTable, 'User');
createTable(articlesTable, 'Articles');
createTable(gifsTable, 'Gifs');
