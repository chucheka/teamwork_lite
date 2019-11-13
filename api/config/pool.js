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
			connectionString: process.env.DEV_DB
		};
		break;
}

const pool = new Pool(connect);

export default pool;
