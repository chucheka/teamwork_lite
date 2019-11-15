import { Pool } from 'pg';
import 'dotenv/config';

let connect;

if (process.env.NODE_ENV === 'test') {
	connect = {
		connectionString: process.env.TEST_DB
	};
} else {
	connect = {
		connectionString: process.env.PROD_DB || process.env.DEV_DB
	};
}
// switch (process.env.NODE_ENV) {
// 	case 'test':
// 		connect = {
// 			connectionString: process.env.DEV_DB
// 		};
// 		break;
// 	case 'production':
// 		connect = {
// 			connectionString: process.env.PROD_DEV
// 		};
// 		break;
// 	default:
// 		connect = {
// 			connectionString: process.env.DEV_DB
// 		};
// 		break;
// }

console.log(connect);

const pool = new Pool({
	connect,
	max: 10,
	idleTimeoutMillis: 3000000
});

export default pool;
