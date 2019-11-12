import { Pool } from 'pg';
import 'dotenv/config';
let connect;
switch (process.env.NODE_ENV) {
	case 'test':
		connect = {
			connectionString: process.env.DB_DEV,
			max: 50, // set pool max size to 50
			idleTimeoutMillis: 600000,
			connectionTimeoutMillis: 6000
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

export default pool;
