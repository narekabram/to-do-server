import express from 'express';
const router = express.Router();

import * as user from './auth.controller';
import {validateRegisterForm} from './auth.validation.controller';

router.post('/register', validateRegisterForm(), user.register);

export default router;