/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');
const db = require('../database-mongo');

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../react-client/dist')));

app.use('/api/spoonacular', controller.postData);
app.get('/recipes/:cuisine', controller.getRecipes);

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
