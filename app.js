const express = require('express');
const mongoose = require('mongoose');
const getRoute = require('./routes/get');
const postRoute = require('./routes/userDataRoute');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

app.use('/get', getRoute);
app.use('/userdata', postRoute);

mongoose.connect(process.env.DB_CONNECT, {useNewUrlPArser: true}, () => console.log('Connected to Database'));

app.listen(3000);
