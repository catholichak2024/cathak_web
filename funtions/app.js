// functions/app.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use('/proxy', async (req, res) => {
  const response = await fetch(`http://13.125.38.246:3000${req.url}`, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });
  const data = await response.json();
  res.json(data);
});

module.exports = app;
