import { Router } from 'express';
import * as AuthController from './controller';
import { validateRegistration, validateLogin } from './validation';

const router = Router();

router.post('/register', validateRegistration(), AuthController.create);
router.post('/login', validateLogin(), AuthController.login);

export default router;
