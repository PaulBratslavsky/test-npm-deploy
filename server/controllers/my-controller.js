'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('npmdeploy')
      .service('myService')
      .getWelcomeMessage();
  },
};
