'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRequest = createRequest;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _config = require('../config/config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urls = _config.githubApi.urls,
    timeout = _config.githubApi.timeout,
    token = _config.githubApi.token;
function createRequest() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      _options$body = options.body,
      body = _options$body === undefined ? {} : _options$body,
      _options$method = options.method,
      method = _options$method === undefined ? 'get' : _options$method,
      query = options.query;


  return new _promise2.default(function (resolve, reject) {
    _superagent2.default[method](urls.base + url).timeout(timeout).set('Accept', 'application/json').set('Content-Type', 'application/json; charset=utf-8').send(body).query(query).end(function (error) {
      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (error) {
        reject(error);
      }

      resolve(response.body);
    });
  });
}