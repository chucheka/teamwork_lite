import pool from '../config/pool';
import { commentsTable } from './comments/sql';
async function createTable(queryText, tableName) {
	try {
		const response = await pool.query(queryText);
		console.log(`${tableName} table has be created`);
	} catch (error) {
		console.log(error.stack);
	}
}

createTable(commentsTable, 'Comments');
