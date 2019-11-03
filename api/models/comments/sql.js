import { Comment } from '../objects';

export const commentsTable = `DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments(
    "authourId" INTEGER NOT NULL,
   "articleId" INTEGER NOT NULL,
    "gifId" INTEGER NOT NULL,
    "commentId" SERIAL PRIMARY KEY NOT NULL,
    "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    comment VARCHAR(255) NOT NULL,
    FOREIGN KEY ("authourId") REFERENCES users("userId") ON DELETE CASCADE,
    FOREIGN KEY ("articleId") REFERENCES articles("articleId") ON DELETE CASCADE,
    FOREIGN KEY ("gifId") REFERENCES gifs("gifId") ON DELETE CASCADE
)
`;

const createComment = `INSERT INTO comments("authourId","articleId","gifId",comment) VALUES($1,$2,$3,$4) RETURNING *`;
const commentValues = [ Comment.authourId, Comment.articleId, Comment.gifId, Comment.comment ];

export const createCommentQuery = {
	createComment,
	commentValues
};

export const commentsByArticleId = `SELECT "commentId",comment, "authourId" FROM comments WHERE "articleId" = $1`;
