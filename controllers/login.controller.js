const { response } = require("express");
const jwt = require('jsonwebtoken')
const { getUserByEmailService } = require("../services/users.services");
const { passMatch } = require("../helpers/hashPassword");

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const response = await getUserByEmailService(email);
        console.log(response);
        if(response.length === 0 ) return res.status(404).json('User not found');

        const passMatchResult = await passMatch(password, response.password);
        if(!passMatchResult) return res.status(200).json('incorrect password');

        const payload = {
            username: response.username,
            email: response.email,
            role: response.role,
            _id: response._id
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn: 1,
        });

        res.status(200).json({message: 'login success', token});

    } catch (error) {
        res.status(500).json(error.message)
    }
};

module.exports = {
    login
}