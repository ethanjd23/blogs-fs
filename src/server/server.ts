import * as express from 'express';
import * as morgan from 'morgan';
import config from './config';

import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(morgan("dev"));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(config.port, () => console.log(`Server listening on port: ${config.port}`));
