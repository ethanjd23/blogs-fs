import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get('/:id?', async (req, res) => {
    const blogid = Number(req.params.id);
    if (blogid) {
        try {
            res.json((await db.tagsDB.getBlogTag(blogid))[0]);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(500);
    }
})

export default router;