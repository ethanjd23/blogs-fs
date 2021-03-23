import * as mysql from 'mysql';
import config from '../config';
import blogsDB from "./blogs";
import authorsDB from "./authors";
import tagsDB from "./tags";


export const connection = mysql.createConnection(config.mysql)

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise <Array<any>>((resolve, reject) => {
        connection.query(query, values, (err, result) => {
            if(err) throw err;
            return resolve(result);
        })
    })
};

export default {
    blogsDB,
    authorsDB,
    tagsDB
}