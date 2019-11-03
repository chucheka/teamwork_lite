import { gifObj } from '../objects';

export const gifsTable = `DROP TABLE IF EXISTS gifs CASCADE;
CREATE TABLE gifs(
    "gifId" SERIAL PRIMARY KEY NOT NULL,
    "createdOn" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "imageUrl" VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    flagged BOOLEAN DEFAULT false
)
`;

const createGif = `INSERT INTO gifs(title,"imageUrl") VALUES($1,$2) RETURNING *`;
const gifValues = [ gifObj.imageUrl, gifObj.title ];

export const createGifsQuery = {
	createGif,
	gifValues
};
