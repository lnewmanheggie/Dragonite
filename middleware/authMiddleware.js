const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');

exports.checkUser = catchAsync(async(req, res, next) => {
    let currentUser;
    let token = req.headers?.cookie?.split(' ')[1].startsWith('jwt') || req.headers.authorization.split(' ')[1]
    if (token) {
        // const token = req.headers.cookie.split(' ')[1].substring(4);
        const decoded = await jwt.verify (token, process.env.JWT_SECRET);
        currentUser = await User.findById(decoded._id);
        // const decoded = await jwt.verify (token, process.env.JWT_SECRET);
        // console.log(decoded);
        next()
    } else {
        res.status(401).json({message: 'not authorized'})
    }
})