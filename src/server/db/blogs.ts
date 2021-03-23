import { Query } from "./index";

const getAll = async () => Query(`SELECT blogs.title, blogs.content, authors.name, blogtags.tagid
                                  FROM blogs
                                  INNER JOIN authors ON blogs.authorid = authors.id
                                  LEFT JOIN blogtags ON blogs.id = blogtags.blogid
                                  ORDER BY blogs.id`);

const getOne = async (id: number) =>
  Query("SELECT * FROM blogs where id = ?", [id]);

const update = async (title: string, content: string, id: number) =>
  Query("UPDATE blogs SET title = ?, content = ? WHERE id = ?", [
    title,
    content,
    id
  ]);

const insert = async (title: string, content: string, authorid: number) =>
  Query("INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)", [
    title,
    content,
    authorid,
  ]);

const destroy = async (id: number) =>
  Query("DELETE FROM blogs WHERE id = ?", [id]);

export default {
  getAll,
  getOne,
  update,
  insert,
  destroy,
};
