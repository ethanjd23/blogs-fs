import * as express from "express";
import * as passport from "passport";

import blogsRouter from "./blogs";
import tagsRouter from "./tags";
import authorsRouter from "./authors";

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
});

router.use("/blogs", blogsRouter);
router.use("/tags", tagsRouter);
router.use("/authors", authorsRouter);

export default router;