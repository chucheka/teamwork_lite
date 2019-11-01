import { articleObj } from '../objects';

export const articlesTable = `DROP TABLE IF EXISTS articles CASCADE;
CREATE TABLE articles(
    "articleId" SERIAL PRIMARY KEY NOT NULL,
   "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    article VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
)
`;

const createArticle = `INSERT INTO articles(article,title) VALUES($1,$2) RETURNING *`;
const articleValues = [ articleObj.article, articleObj.title ];

export const createArticleQuery = {
	createArticle,
	articleValues
};
