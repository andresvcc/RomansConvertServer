const contenu = require('./contenu/data');

const routing = (app) => {
  app
    .use('/convert', contenu);
};

module.exports.routing = routing;
