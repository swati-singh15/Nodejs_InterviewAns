const express = require('express');
require('dotenv').config("./env");

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
