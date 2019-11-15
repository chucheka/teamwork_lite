import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connect;

// if (process.env.NODE_ENV === 'test') {
// 	connect = {
// 		connectionString: process.env.TEST_DB
// 	};
// } else {
// 	connect = {
// 		connectionString: process.env.DEV_DB || process.env.PROD_DB
// 	};
// }
switch (process.env.NODE_ENV) {
	case 'test':
		connect = {
			connectionString: process.env.TEST_DB
		};
		break;
	case 'production':
		connect = {
			connectionString: process.env.PROD_DB
		};
		break;
	default:
		connect = {
			connectionString: process.env.DEV_DB
		};
		break;
}

// DEV_DB = postgresql://postgres:chike22ucheka@localhost:5432/teamwork
console.log(connect, process.env.NODE_ENV, typeof process.env.NODE_ENV);

const pool = new Pool({
	connect,
	max: 10,
	idleTimeoutMillis: 30000
});

export default pool;
