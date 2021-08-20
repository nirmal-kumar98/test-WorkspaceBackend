const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        const decodedToken = jwt.verify(token , 'secret_this_should_be_longer');
        req.userData = { emailId: decodedToken.emailId, userId: decodedToken.userId, companyId: decodedToken.companyId }
        // sconsole.log(req.userData);
        next();
    } catch (error) {
        res.status(401).json({
           message: 'Auth Failed!'
        });
    }
};