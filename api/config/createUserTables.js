import pool from './pool';

const userTable = `DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    "userId" SERIAL PRIMARY KEY NOT NULL,
	"firstName" VARCHAR(255) NOT NULL,
	"lastName" VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	gender VARCHAR(20) NOT NULL,
	"jobRole" VARCHAR(255) NOT NULL,
	department VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL
)
`;

async function createUserTable() {
	try {
		const response = await pool.query(userTable);
		console.log('user table has been created');
	} catch (error) {
		console.log(error.stack);
	}
}
createUserTable();
