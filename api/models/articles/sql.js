import { articleObj } from '../objects';

export const articlesTable = `DROP TABLE IF EXISTS articles CASCADE;
CREATE TABLE articles(
    "articleId" SERIAL PRIMARY KEY NOT NULL,
   "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    article VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    flagged BOOLEAN DEFAULT false,
    tag VARCHAR(30) NULL
)
`;

const createArticle = `INSERT INTO articles(article,title,tag) VALUES($1,$2,$3) RETURNING *`;
const articleValues = [ articleObj.article, articleObj.title, articleObj.tag ];

export const createArticleQuery = {
	createArticle,
	articleValues
};

export const searchArticleById = `SELECT * FROM articles WHERE "articleId" = $1`;

export const updateArticleById = `UPDATE articles SET article = $1,title = $2 WHERE "articleId" = $3 RETURNING *`;

export const deleteArticleById = `DELETE FROM articles WHERE "articleId" = $1 RETURNING *`;
export const deleteFlaggedArticleById = `DELETE FROM articles WHERE "articleId" = $1 AND flagged = true RETURNING *`;
export const flagArticleQuery = `UPDATE articles SET flagged = true RETURNING *`;
