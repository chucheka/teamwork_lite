import pool from './pool';

const gifsTable = `DROP TABLE IF EXISTS gifs CASCADE;
CREATE TABLE gifs(
    "gifId" SERIAL PRIMARY KEY NOT NULL,
    "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "imageUrl" VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
)
`;

async function createGifsTable() {
	try {
		const response = await pool.query(gifsTable);
		console.log('Gifs table table has been created');
	} catch (error) {
		console.log(error.stack);
	}
}
createGifsTable();
