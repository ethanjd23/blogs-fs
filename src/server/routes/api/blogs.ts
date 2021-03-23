import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  if (req.params.id) {
    let blogid = Number(req.params.id);
    try {
      res.json((await db.blogsDB.getOne(blogid))[0]);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  } else {
    try {
      res.json(await db.blogsDB.getAll());
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
});

router.post("/", async (req, res) => {
    let newBlog: {
        title: string;
        content: string;
        authorid: number;
        tagid?: number;
    } = req.body
    try {
        let result = await db.blogsDB.insert(newBlog.title, newBlog.content, newBlog.authorid)
        if(newBlog.tagid) {
            db.tagsDB.insert(result.insertId, newBlog.tagid);
        }
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete("/:id", async (req, res) => {
    let blogid = Number(req.params.id);
    try {
        let result = await db.blogsDB.destroy(blogid);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;
