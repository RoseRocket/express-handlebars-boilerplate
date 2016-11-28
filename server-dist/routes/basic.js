'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = home;
var BASIC_VIEW = 'home';

function home(req, res, next) {
  var context = {
    layoutData: {
      title: 'My Basic Example',
      meta: {
        author: 'Alexey Novak',
        description: '',
        keywords: '',
        robots: ''
      }
    }
  };

  res.render(BASIC_VIEW, context);
}