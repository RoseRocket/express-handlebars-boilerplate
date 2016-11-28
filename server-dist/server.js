'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index.js');

var _index2 = _interopRequireDefault(_index);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _consoleStamp = require('console-stamp');

var _consoleStamp2 = _interopRequireDefault(_consoleStamp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _authRequest = require('./middlewares/authRequest.js');

var _authRequest2 = _interopRequireDefault(_authRequest);

var _allowCORS = require('./middlewares/allowCORS.js');

var _allowCORS2 = _interopRequireDefault(_allowCORS);

var _notFound = require('./middlewares/notFound.js');

var _notFound2 = _interopRequireDefault(_notFound);

var _logErrors = require('./middlewares/logErrors.js');

var _logErrors2 = _interopRequireDefault(_logErrors);

var _serverError = require('./middlewares/serverError.js');

var _serverError2 = _interopRequireDefault(_serverError);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _config = require('./config/config.js');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console:0 */

var PRODUCTION_MODE = 'production';

var _config$PORT = config.PORT,
    PORT = _config$PORT === undefined ? 3000 : _config$PORT,
    _config$IP = config.IP,
    IP = _config$IP === undefined ? 'localhost' : _config$IP;


var PING = 'ping';

var app = (0, _express2.default)();

(0, _consoleStamp2.default)(console, { pattern: 'dd/mmm/yyyy:HH:MM:ss o' });

_morgan2.default.token('date', function () {
  return (0, _moment2.default)().format('DD/MMM/YYYY:HH:mm:ss ZZ');
});

app.use((0, _morgan2.default)('common'));
app.use(_bodyParser2.default.json());
//Defining middleware to serve static files
app.use('/static', _express2.default.static(_path2.default.join(__dirname, '../public')));

// Use Handlebars as my main render engine
app.engine('handlebars', (0, _expressHandlebars2.default)({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// enable aggressive view caching for production
app.enable('view cache');

app.use('/*', _allowCORS2.default);

// <---- SET URLS WHICH BYPASS AUTH LOGIC IN HERE:
app.use('/*', _authRequest2.default.unless({
  path: ['/' + PING, '/home']
}));

app.use('/', _index2.default);
app.use(_notFound2.default);

app.use(_logErrors2.default);
app.use(_serverError2.default);

// set the port for the webservice
if (process.argv.length > 2) {
  port = process.argv[2];
}

// set process title
if (process.argv.length > 3) {
  process.title = process.argv[3];
}

// output process pid into a file if needed
if (process.argv.length > 4) {
  _fs2.default.writeFile(process.argv[4], process.pid);
}

// Start the server
app.set('port', PORT);
app.listen(app.get('port'), IP, function () {
  console.log('WebService has started on ' + IP + ':' + PORT + ' running in ' + process.env.NODE_ENV + ' mode');
  if (process.env.NODE_ENV !== PRODUCTION_MODE) {
    console.log('PLEASE NOTE: your webservice is running not in a production mode!');
  }
});