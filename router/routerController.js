const contenu = require('./contenu/data');

const routing = (app) => {
  app
    .use('/api/convert', contenu);
};

module.exports.routing = routing;
