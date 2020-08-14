/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

dotenv.config();

const PORT = process.env.PORT || 3300;
const app = express();

app.get('/', (req, res) => {
  const { query } = req;
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', async (err, html) => {
    // If no build is present, then it will throw error.
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // Get SSR Props
    const data = await App.getSSRProps(query || {});
    const stringifiedApp = ReactDOMServer.renderToString(<App data={data} />);
    const htmlwithData = html.replace(
      '<script>window.__REACT_INITIAL_PROPS</script>',
      `<script>window.__REACT_INITIAL_PROPS=${JSON.stringify({ data })}</script>`,
    );
    return res.send(
      htmlwithData.replace('<div id="root"></div>', `<div id="root">${stringifiedApp}</div>`),
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.info(`Server is listening on port ${PORT}`);
});
