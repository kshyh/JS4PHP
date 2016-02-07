'use strict';

function getRouteHandler(path, config) {
  return require('koa-route')
    .get(
      path,
      function *() {
        this.body = require('jade')
          .renderFile(
            require('path')
              .join(__dirname, '/node_modules/app/templates/layout.jade'),
            config
          );
      }
    );
}

require('koa')()
  .use(
    require('koa-static')(__dirname + '/../../client/dist')
  )
  .use(
    getRouteHandler('/index.html', {
      title: 'Hello production!',
      bundleUrl: 'prod.js',
      config: {
        msg: 'Console.log on production!',
        a: 10,
        b: 20
      }
    })
  )
  .use(
    getRouteHandler('/index_dev.html', {
      title: 'Hello development!',
      bundleUrl: 'dev.js',
      config: {
        msg: 'Console.log on development!',
        a: 13,
        b: 8
      }
    })
  )
  .listen(3000);
