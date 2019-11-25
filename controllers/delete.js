const UserModel = require('../models/users');
const httpStatus = require('http-status');

module.exports = (req, res) => {
    UserModel.findOneAndDelete(req.body.filter, {
        useFindAndModify: false
    },(err, docs) => {
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