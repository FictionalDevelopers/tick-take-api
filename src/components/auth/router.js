import { Router } from 'express';

import authorized from '@app/middlewares/authorized';

import * as AuthController from './controller';
import { validateRegistration, validateLogin } from './validation';

const router = Router();

router.post('/register', validateRegistration(), AuthController.create);
router.post('/login', validateLogin(), AuthController.login);
router.get('/current', authorized, AuthController.current);

export default router;
