import * as mysql from 'mysql';
import config from '../config';
import blogsDB from "./blogs";
import authorsDB from "./authors";
import tagsDB from "./tags";
import tokensDB from "./tokens";


export const pool = mysql.createPool(config.mysql)

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise <Array<any>>((resolve, reject) => {
        pool.query(query, values, (err, result) => {
            if(err) throw err;
            return resolve(result);
        })
    })
};

export default {
    blogsDB,
    authorsDB,
    tagsDB,
    tokensDB
}