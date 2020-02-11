import { Router } from 'express';
import * as AuthController from './controller';
import { validateRegistration } from './validation';

const router = Router();

router.post('/register', validateRegistration(), AuthController.create);
router.post('/login', AuthController.login);

export default router;
