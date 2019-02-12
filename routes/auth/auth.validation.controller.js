import { check, validationResult } from 'express-validator/check';

export const validateRegisterForm = function () {
    return [
        check('username').isEmail(),
        check('password').isLength({min: 6})
    ]
};

export const checkValidationError = function (req, res) {
    const errors = validationResult(req);
    return errors.isEmpty() ? false : { errors: errors.array(), status: 422 };
};