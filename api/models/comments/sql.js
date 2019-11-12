export const commentsTable = `
CREATE TABLE comments(
    "authourId" INTEGER NULL,
   "articleId" INTEGER NULL,
    "gifId" INTEGER NULL,
    "commentId" SERIAL PRIMARY KEY NOT NULL,
    "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    comment VARCHAR(255) NOT NULL,
    FOREIGN KEY ("authourId") REFERENCES users("userId") ON DELETE CASCADE,
    FOREIGN KEY ("articleId") REFERENCES articles("articleId") ON DELETE CASCADE,
    FOREIGN KEY ("gifId") REFERENCES gifs("gifId") ON DELETE CASCADE,
    flagged BOOLEAN DEFAULT false
)
`;

const createComment = `INSERT INTO comments("authourId","articleId","gifId",comment) VALUES($1,$2,$3,$4) RETURNING *`;

export const createCommentQuery = {
	createComment
};

export const commentsByArticleId = `SELECT "commentId",comment, "authourId" FROM comments WHERE "articleId" = $1`;
export const commentsByGifId = `SELECT "commentId",comment, "authourId" FROM comments WHERE "gifId" = $1`;
export const searchCommentById = `SELECT * FROM comments WHERE "commentId" = $1`;
export const flagCommentQuery = `UPDATE comments SET flagged = true RETURNING *`;
export const deleteCommentById = `DELETE FROM comments WHERE "commentId" = $1 RETURNING *`;
