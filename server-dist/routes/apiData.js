'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.repos = repos;

var _githubApi = require('../api/githubApi.js');

var githubApi = _interopRequireWildcard(_githubApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var API_DATA_VIEW = 'apiData';

function repos(req, res, next) {
  var username = req.params.username;


  var context = {
    layoutData: {
      title: 'API request example',
      meta: {
        author: 'Alexey Novak',
        description: '',
        keywords: '',
        robots: ''
      }
    },
    githubAuthor: username
  };

  githubApi.getRepos({ username: username }).then(function (repos) {

    res.render(API_DATA_VIEW, _extends({}, context, { repos: repos }));
  }).catch(next);
}