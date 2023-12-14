const jwt = require('jsonwebtoken');

const authTokenValidation = async(req, res, next)=>{
    try {
        const token = req.headers['access-token'];
        if(!token) return res.status(400).json('Bad Token')

        jwt.verify(token, process.env.SECRET_KEY, (error,decoded)=>{
            if (error) return res.status(401).json('Invalid Token');
            req.user = decoded;
        });
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const validateRole = (req, res, next)=>{
    try {
        const user = req.user;
        if(user.role !== 'admin') return res.status(401).json('Not authorized');
        next();
    } catch (error) {
        res.status(500).json(error)
    };
};


module.exports = {
    authTokenValidation,
    validateRole
}