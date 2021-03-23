import { Query } from './index';

const insert = async (blogid: number, tagid: number) => Query("INSERT INTO blogtags VALUE (?, ?)", [blogid, tagid]);

export default {
    insert
}