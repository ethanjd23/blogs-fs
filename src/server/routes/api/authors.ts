import * as express from "express";
import db from "../../db";
import router from "./blogs";

router.get("/id?", (req, res) => {

})

router.post("/", async (req, res) => {
    let newUser: INewuser = req.body
    try {
        await db.authorsDB.insert(newUser.name, newUser.email, newUser.password);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
export default {

}

interface INewuser {
    name: string;
    email: string;
    password: string;
}