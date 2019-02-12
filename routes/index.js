import usersRouter from "./user";
import authUser from "./auth";

export default function(app) {
    app.use('/api/users', usersRouter);
    app.use('/api/auth', authUser);
};
