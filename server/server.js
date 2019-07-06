const express = require('express');
const next = require('next');

const IS_DEV = process.env.NODE_ENV !== 'production';
const app = next({ dev: IS_DEV });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // ssr normal route
    server.get('/post/:id', (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, '/post', queryParams);
    });

    // ssr aliased route example: /p/id mapped to post page component
    server.get('/p/:id', (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, '/post', queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
