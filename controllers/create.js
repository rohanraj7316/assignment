const UserModel = require('../models/users');
const httpStatus = require('http-status');

module.exports = (req, res) => {
    const userObj = new UserModel(req.body);
    userObj.save(err => {
        if (err) return res.status(httpStatus.BAD_GATEWAY).json({
            status: false,
            message: 'failed to exec your query'
        });
        return res.status(httpStatus.OK).json({
            status: true,
            message: 'successfully exec your query'
        });
    });
};