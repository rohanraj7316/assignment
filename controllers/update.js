const UserModel = require('../models/users');
const httpStatus = require('http-status');

module.exports = (req, res) => {
    const filter = req.body.filter;
    const update = req.body.update;
    UserModel.findOneAndUpdate(filter, update, {
        new: true,
        useFindAndModify: false
    }, (err, docs) => {
        if (err) return res.status(httpStatus.BAD_GATEWAY).json({
            status: false,
            message: 'failed to exec your query'
        });
        return res.status(httpStatus.OK).json({
            status: true,
            data: docs,
            message: 'successfully exec your query'
        });
    });
};