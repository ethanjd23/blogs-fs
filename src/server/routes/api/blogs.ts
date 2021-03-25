import * as express from "express";
import db from "../../db";

const router = express.Router();

const isAdmin: express.RequestHandler = (req, res, next) => {
  if(!req.user || req.user.role !== 'admin') {
    return res.sendStatus(401);
  } else {
    return next();
  }
}

router.get("/:id?", async (req, res, next) => {
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

router.put("/:id", async (req, res) => {
    const updatedBlog: {
        title: string;
        content: string;
    } = req.body
    const blogToUpdate = Number(req.params.id);
    try {
        let result = db.blogsDB.update(updatedBlog.title, updatedBlog.content, blogToUpdate);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.post("/", isAdmin, async (req, res) => {
  let newBlog: {
    title: string;
    content: string;
    authorid: number;
    tagid?: number;
  } = req.body;
  try {
    let result = await db.blogsDB.insert(
      newBlog.title,
      newBlog.content,
      newBlog.authorid
    );
    if (newBlog.tagid) {
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
    db.tagsDB.destroyBlogTag(blogid);
    db.blogsDB.destroy(blogid);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;