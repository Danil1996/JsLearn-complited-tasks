'use strict';
// requested connections
const express = require('express');
const bodyParser = require('body-parser');

//constans
const PORT = 3000;

const app = express();

// server connect
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('This is Base');
});

// import routers
const userRoute = require('./routes/user.js');
app.use(bodyParser.json());
app.use('/user', userRoute);
