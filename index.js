/** **********************************
    App
************************************ */

const express = require('express');
const cors = require('cors');

const app = express();
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Limit request from the same API
const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: 'Too Many Request from this IP, please try again in an hour',
});

const routerController = require('./router/routerController');

// detention des errors dans le corp des requêtes http
const errorDetection = (error, req, res, next) => (error instanceof SyntaxError
  ? res.send({ info: `ERROR DETECTED:${error}`, error }) : next());

const dirRoot = __dirname;

app
  .use(express.static(`${dirRoot.root}/public/build/buildClient/`))
  .use('/images', express.static(`${dirRoot.root}/public/images`))
  .use('/public/images', express.static(`${dirRoot.root}/public/images`))
  .set('trust proxy', 1)
  .use(cors({ credentials: true }))
  .use(helmet())
  .use(express.json({ limit: '10mb' }))
  .use(express.urlencoded({ extended: true, limit: '10mb' }))
  .use(errorDetection);

routerController.routing(app);

module.exports = app;
