const mongoose = require('mongoose');
const util = require('util');

const config = require('./config/config');
const app = require('./config/express');

mongoose.Promise = Promise;

mongoose.connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoReconnect: true
});
mongoose.connection.on('error', (err) => {
    const error = new Error(`unable to connect to db: ${config.mongo.uri} with error: ${err}`);
    util.log(error);
});

app.listen(config.port, () => {
    util.log(`server started at port: ${config.port}`);
});

module.exports = app;