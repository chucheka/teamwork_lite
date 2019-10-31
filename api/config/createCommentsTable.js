import pool from './pool';

const commentsTable = `DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments(
    "authourId" INTEGER NOT NULL,
   "articleId" INTEGER NOT NULL,
    "gifId" INTEGER NOT NULL,
    "commentId" SERIAL PRIMARY KEY NOT NULL,
    "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    comment VARCHAR(255) NOT NULL,
    FOREIGN KEY ("authourId") REFERENCES users("userId"),
    FOREIGN KEY ("articleId") REFERENCES articles("articleId"),
    FOREIGN KEY ("gifId") REFERENCES gifs("gifId")
)
`;
async function createCommentsTable() {
	try {
		const response = await pool.query(commentsTable);
		console.log('Comments table table has been created');
	} catch (error) {
		console.log(error.stack);
	}
}
createCommentsTable();
