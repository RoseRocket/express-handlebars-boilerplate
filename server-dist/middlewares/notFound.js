'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  res.sendStatus(HTTP_NOT_FOUND);
};

var _config = require('../config/config.js');

var HTTP_NOT_FOUND = _config.HTTP_CODES.HTTP_NOT_FOUND;