// modules =================================================
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

