import {checkValidationError} from "./auth.validation.controller";
import User from '../../db/user.model';
import {jwtService} from "../../services/jwt.service";

const register = function (req, res, next) {

    const user = new User(req.body);
    const error = checkValidationError(req, res);

    if (error) {
      return res.status(422).json(error);
    }

    user.save()
        .then(user => jwtService.sign(user))
        .then(token => res.json({ token }))
        .catch(err => next(err))
};

const login = function (req, res) {
    console.log(req.body);
};

export {
    register, login
};