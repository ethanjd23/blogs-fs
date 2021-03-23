import { Query } from './index';

const getAll = async () => Query("SELECT * FROM tags");

const getBlogTag = async (blogid: number) => Query("CALL spBlogTags(?)", [blogid]);

const insert = async (blogid: number, tagid: number) => Query("INSERT INTO blogtags VALUE (?, ?)", [blogid, tagid]);

const destroyBlogTag = (blogid: number) => Query(`DELETE FROM blogtags WHERE blogid = ?`, [blogid]);

export default {
    getAll,
    getBlogTag,
    insert,
    destroyBlogTag
}