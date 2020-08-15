/* eslint-disable camelcase */
/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import configureStore from '../src/store/index.store';

dotenv.config();

const PORT = process.env.PORT || process.env.$PORT || 3300;
const app = express();

app.get('/', (req, res) => {
  // Get the filter details from the query params
  const { launch_year, launch_success, land_success } = req.query;
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', async (err, html) => {
    // If no build is present, then it will throw error.
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // Create your filter object
    const filters = {
      ...(launch_year ? { launch_year } : {}),
      ...(launch_success ? { launch_success } : {}),
      ...(land_success ? { land_success } : {}),
    };
    // Get SSR Props (Similar to getInitialProps in Next.js)
    const data = await App.getSSRProps(filters);
    // Render App and send it as an HTML string
    const stringifiedApp = ReactDOMServer.renderToString(
      <ReduxProvider store={configureStore({ spaceXReducer: { data, filters } })}>
        <App data={data} />
      </ReduxProvider>,
    );
    // Add the same props data for react hydration in client.
    const htmlwithData = html.replace(
      '<script>window.__REACT_INITIAL_PROPS</script>',
      `<script>window.__REACT_INITIAL_PROPS=${JSON.stringify({ data, filters })}</script>`,
    );
    return res.send(
      // Attach App string in DOM body.
      htmlwithData.replace('<div id="root"></div>', `<div id="root">${stringifiedApp}</div>`),
    );
  });
});

// Serve build folder so that the HTML can successfully make calls to
// static files like JS, CSS, etc.
app.use(express.static('./build'));

app.listen(PORT, () => {
  console.info(`Server is listening on port ${PORT}`);
});
