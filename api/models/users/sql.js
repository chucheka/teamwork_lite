import { user } from '../objects';
export const dropUserTable = 'DROP TABLE IF EXISTS users CASCADE';
export const userTable = `CREATE TABLE users(
    "userId" SERIAL PRIMARY KEY NOT NULL,
	"firstName" VARCHAR(255) NOT NULL,
	"lastName" VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	gender VARCHAR(20) NOT NULL,
	"jobRole" VARCHAR(255) NOT NULL,
	department VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL
)`;

const createUser = `INSERT INTO users("firstName","lastName",email,password,gender,"jobRole",department,address) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
const userValues = [
	user.firstName,
	user.lastName,
	user.email,
	user.password,
	user.gender,
	user.jobRole,
	user.departmant,
	user.address
];

export const createUserQuery = {
	createUser,
	userValues
};

export const checkEmail = `SELECT * FROM users WHERE email = $1 `;
