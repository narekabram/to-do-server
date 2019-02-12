const secretKey = 'toDoList';
import jwt from 'jsonwebtoken';

export const jwtService = {
    sign: function (user) {
        return Promise.resolve(jwt.sign({ _id: user._id }, secretKey));
    }
};