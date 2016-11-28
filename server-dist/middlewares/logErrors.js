'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (err, req, res, next) {
  var method = req.method;
  var url = req.url,
      body = req.body;


  method = method.toUpperCase();

  console.error('API fail -> ' + method + ' ' + url);
  if (method === 'POST' || method === 'PUT') {
    console.error('body is -> ' + JSON.stringify(body));
  }
  console.error(err);
  console.error(err.stack);
  next(err);
};