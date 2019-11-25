const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
// const httpStatus = require('http-status');
// const expressWinston = require('express-winston');
// const expressValidation = require('express-validation');
const helmet = require('helmet');

const config = require('./config');
const router = require('./../index.router');

const app = express();

if (config.env == 'development') {
    app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on '/' path
app.use('/', router);

app.use((err, req, res, next) => {

    // if (err instanceof expressValidation.ValidationError) {

    // } else if () {

    // }

    return next(err);
});

// // catch 404 and forward to error handler.
// app.use((req, res, next) => {

// });

module.exports = app;