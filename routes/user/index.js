import express from 'express';
const router = express.Router();

import * as user from './user.controller';

router.get('/me', user.get);

export default router;