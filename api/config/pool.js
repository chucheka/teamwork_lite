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
			connectionString: {
				user: process.env.PGUSER,
				host: process.env.PGHOST,
				database: process.env.PGDATABASE,
				password: process.env.PGPASSWORD,
				port: process.env.PGPORT
			}
		};
		break;
	default:
		connect = {
			connectionString: process.env.DEV_DB
		};
		break;
}

console.log(connect, process.env.NODE_ENV, typeof process.env.NODE_ENV);

const pool = new Pool({
	connect,
	max: 50,
	idleTimeoutMillis: 60000
});

export default pool;
