'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (err, req, res) {
  res.sendStatus(HTTP_SERVER_ERROR);
};

var _config = require('../config/config.js');

var HTTP_SERVER_ERROR = _config.HTTP_CODES.HTTP_SERVER_ERROR;