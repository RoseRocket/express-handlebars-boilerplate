'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepos = getRepos;

var _baseRequest = require('./baseRequest.js');

var _config = require('../config/config.js');

var _util = require('util');

var urls = _config.githubApi.urls;
function getRepos(args) {
  var username = args.username;


  return (0, _baseRequest.createRequest)({ url: (0, _util.format)(urls.repos, username) });
}