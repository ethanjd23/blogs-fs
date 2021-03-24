import { Query } from "./index";

const getNameFromID = async (name: string) =>
  Query("SELECT authors.id FROM authors WHERE name = ?", [name]);

const insert = async (name: string, email: string) =>
  Query(`INSERT INTO authors (name, email) VALUES (?, ?)`, [name, email]);

export default {
  getNameFromID,
  insert
};
