'use strict';
require('dotenv').config({silent:true});

const express             = require('express'),
      app                 = express(),
      PORT                = process.env.PORT || 3000,
      logger              = require('morgan'),
      bparser             = require('body-parser');

// setting morgan to dev
app.use(logger('dev'));

// body-parser to JSON
app.use(bparser.urlencoded({extended:true}));
app.use(bparser.json());

// routes
app.use(require('./router.js'));

// listen
app.listen(PORT, () => {
  console.log(`🍙  ${PORT}`);
});
