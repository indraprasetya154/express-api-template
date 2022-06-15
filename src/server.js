import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();

const APP_PORT = process.env.PORT;
const ENV = process.env.APP_ENV;

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(
  APP_PORT,
  console.log(`
  Server running in ${ENV} mode on port ${APP_PORT}
  `)
);
