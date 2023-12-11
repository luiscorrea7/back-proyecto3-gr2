const { body } = require('express-validator');

const createUserValidations = {
  email: body('email')
    .isEmail()
    .withMessage('Please enter an valid email')
    .not()
    .isEmpty()
    .withMessage('This field is required'),
  password: body('password')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,14}$/)
    .withMessage(`This password doesn't meet the requirements `)
}

module.exports = {
  createUserValidations
}