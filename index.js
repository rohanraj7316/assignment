const mongoose = require('mongoose');
const util = require('util');

const config = require('./config/config');
const app = require('./config/express');

mongoose.Promise = Promise;

mongoose.connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to db: ${config.mongo.uri}`);
});

app.listen(config.port, () => {
    util.log(`server started at port: ${config.port}`);
});

module.exports = app;