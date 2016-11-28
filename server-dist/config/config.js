'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// <----- SET YOUR SERVER PROPER SETTINGS IN THIS FILE

// server config
var IP = exports.IP = 'localhost';
var PORT = exports.PORT = 3000;
var TOKEN = exports.TOKEN = {
  secret: 'SOME-KEY-HERE',
  headerName: 'token'
};
var HTTP_CODES = exports.HTTP_CODES = {
  HTTP_SUCCESS: 200,
  HTTP_CLIENT_ERROR: 400,
  HTTP_INVALID_TOKEN: 401,
  HTTP_NOT_AUTHORIZED: 403,
  HTTP_NOT_FOUND: 404,
  HTTP_SERVER_ERROR: 500
};

// extra 3rd party configs
var db = exports.db = {
  user: 'USER',
  password: 'PASSWORD',
  server: 'MY_SERVER',
  database: 'MY_DATABASE'
};
var githubApi = exports.githubApi = {
  token: "Maybe you need a secret key to pass",
  timeout: 6000,
  urls: {
    base: "https://api.github.com/",
    repos: "users/%s/repos"
  }
};