import { Pool } from 'pg';
import 'dotenv/config';
let connect;
switch (process.env.NODE_ENV) {
	case 'test':
		connect = {
			connectionString: process.env.DB_DEV
		};
		break;
	case 'production':
		connect = {
			connectionString: process.env.DB_PROD
		};
		break;
	default:
		connect = {
			connectionString: process.env.DB_DEV
		};
		break;
}

const pool = new Pool(connect);

// let pool;
// async function createPool() {
// 	try {
// 		pool = await new Pool(connect);
// 		console.log(pool);
// 		return pool;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
export default pool;
