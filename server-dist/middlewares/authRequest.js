'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressUnless = require('express-unless');

var _expressUnless2 = _interopRequireDefault(_expressUnless);

var _config = require('../config/config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = _config.TOKEN.secret,
    headerName = _config.TOKEN.headerName;
var HTTP_INVALID_TOKEN = _config.HTTP_CODES.HTTP_INVALID_TOKEN,
    HTTP_NOT_AUTHORIZED = _config.HTTP_CODES.HTTP_NOT_AUTHORIZED;


function validateToken(token) {
  // <------- PUT YOUR AUTH LOGIC IN THIS FUNCTION

  return secret === token;
}

function middleware(req, res, next) {
  var token = req.body && req.body[headerName] || req.query && req.query[headerName] || req.headers[headerName];

  if (!token) {
    res.status(HTTP_INVALID_TOKEN);
    res.json({
      status: HTTP_INVALID_TOKEN,
      message: 'Invalid Token'
    });
    return;
  }

  try {
    // Authorize the user to see if s/he can access our resources
    if (!validateToken(token)) {
      res.status(HTTP_NOT_AUTHORIZED);
      res.json({
        status: HTTP_NOT_AUTHORIZED,
        message: 'Not Authorized'
      });
      return;
    }

    next(); // To move to next middleware
  } catch (err) {
    next(err); // To move to next error middleware
  }
}

middleware.unless = _expressUnless2.default;

exports.default = middleware;