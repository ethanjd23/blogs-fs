import { Query } from './index';

const getAll = async () => Query("SELECT * FROM tags");

const getBlogTag = async (blogid: number) => Query("CALL spBlogTags(?)", [blogid]);

const insert = async (blogid: number, tagid: number) => Query("INSERT INTO blogtags VALUE (?, ?)", [blogid, tagid]);

export default {
    getAll,
    getBlogTag,
    insert
}