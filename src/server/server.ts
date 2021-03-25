import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as passport from 'passport';

import config from './config';
import './middleware/bearerstrategy';
import './middleware/localstrategy';
import apiRouter from './routes';


const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(passport.initialize());


app.use(morgan("dev"));
app.use(apiRouter);
app.use("*",(req, res) => res.sendFile(path.join(__dirname, "../public/index.html")))

app.listen(config.port, () => console.log(`Server listening on port: ${config.port}`));
