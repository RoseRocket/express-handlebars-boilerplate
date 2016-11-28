'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res, next) {
  // <----- PUT YOUR PROPER CORS SETTINGS IN THIS FUNCTION

  // CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

  if (req.method === 'OPTIONS') {
    res.status(HTTP_SUCCESS).end();
  } else {
    next();
  }
};

var _config = require('../config/config.js');

var HTTP_SUCCESS = _config.HTTP_CODES.HTTP_SUCCESS;