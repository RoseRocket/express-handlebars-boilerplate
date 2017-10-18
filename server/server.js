/* eslint no-console:0 */

const PRODUCTION_MODE = 'production';

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import fs from 'fs';
import moment from 'moment';
import consoleStamp from 'console-stamp';
import path from 'path';
import authRequest from './middlewares/authRequest.js';
import allowCORSHandler from './middlewares/allowCORS.js';
import notFoundRequest from './middlewares/notFound.js';
import logErrorsHandler from './middlewares/logErrors.js';
import errorHandler from './middlewares/serverError.js';
import exphbs from 'express-handlebars';
import * as config from './config/config.js';
import * as helpers from './utils/hbsHelpers.js';

const { PORT = 3000, HOST = 'localhost', TITLE, PID_FILE } = process.env;

const PING = 'ping';

const app = express();

consoleStamp(console, { pattern: 'dd/mmm/yyyy:HH:MM:ss o' });

logger.token('date', () => moment().format('DD/MMM/YYYY:HH:mm:ss ZZ'));

app.use(logger('common'));
app.use(bodyParser.json());
//Defining middleware to serve static files
app.use('/static', express.static(path.join(__dirname, '../public')));

// Use Handlebars as my main render engine
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
        helpers,
    })
);
app.set('view engine', 'handlebars');

// enable aggressive view caching for production
app.enable('view cache');

app.use('/*', allowCORSHandler);

// <---- SET URLS WHICH BYPASS AUTH LOGIC IN HERE:
app.use(
    '/*',
    authRequest.unless({
        path: [`/${PING}`, '/home', '/homeWithPartials'],
    })
);

app.use('/', routes);
app.use(notFoundRequest);

app.use(logErrorsHandler);
app.use(errorHandler);

// set process title
if (TITLE) {
    process.title = TITLE;
}

// output process pid into a file if needed
if (PID_FILE) {
    fs.writeFile(PID_FILE, process.pid);
}

// Start the server
app.set('port', PORT);
app.listen(app.get('port'), HOST, () => {
    if (!process.env.NODE_ENV) {
        console.log(`process.env.NODE_ENV is not set!`);
    }

    console.log(
        `WebService has started on ${HOST}:${PORT} running in ${process.env.NODE_ENV} mode`
    );
    if (process.env.NODE_ENV !== PRODUCTION_MODE) {
        console.log('PLEASE NOTE: your webservice is running not in a production mode!');
    }
});
