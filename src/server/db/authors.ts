import { Query } from "./index";

const getNameFromID = async (name: string) => Query("SELECT authors.id FROM authors WHERE name = ?", [name]);

export default {
    getNameFromID,
}