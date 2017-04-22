'use strict';
require('dotenv').config({silent:true});

const express             = require('express'),
      app                 = express(),
      PORT                = process.env.PORT || 3000,
      logger              = require('morgan'),
      bparser             = require('body-parser');

app.use(logger('dev'));

app.use(bparser.urlencoded({extended:true}));
app.use(bparser.json());


app.use(require('./router.js'));

app.listen(PORT, () => {
  console.log(`🍙  ${PORT}`);
});
