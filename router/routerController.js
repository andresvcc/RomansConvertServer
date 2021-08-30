const createError = require('http-errors');
const contenu = require('./contain/convert');

const routing = (app) => {
  app
    .use('/api/convert', contenu)
    .use((req, res, next) => {
      next(createError(404));
    })
    .use((err, req, res, next) => {
      res.locals.message = err.message;
      res.status(err.status || 500);
      res.send(err);
    });
};

module.exports.routing = routing;
