import { Query } from "./index";

const getAll = async () => Query("SELECT * FROM blogs");

const getOne = async (id: number) =>
  Query("SELECT * FROM blogs where id = ?", [id]);

const insert = async (title: string, content: string, authorid: number) =>
  Query("INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)", [
    title,
    content,
    authorid,
  ]);

const destroy = async (id: number) => Query("DELETE FROM blogs WHERE id = ?", [id]);

export default {
  getAll,
  getOne,
  insert,
  destroy
};