import { Query } from "./index";

const getIDFromName = async (name: string) =>
  Query("SELECT authors.id FROM authors WHERE name = ?", [name]);

const findOneByEmail = async (email: string) =>
  Query("SELECT * FROM authors WHERE email = ?", [email]);

const findOneByID = async (id: number) =>
  Query(`SELECT * FROM authors WHERE id = ?`, [id]);

const insert = async (name: string, email: string, password: string) =>
  Query(`INSERT INTO authors (name, email, password) VALUES (?, ?, ?)`, [
    name,
    email,
    password,
  ]);

export default {
  getIDFromName,
  findOneByEmail,
  findOneByID,
  insert,
};
