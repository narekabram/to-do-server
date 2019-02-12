import User from '../../db/user.model';

const get = function (req, res) {
    User.find().then(users => res.send(users))
};

export {
    get,
};