import { Router } from 'express';
import * as AuthController from './controller';

const router = Router();

router.post('/register', AuthController.create);
router.post('/login', AuthController.login);

export default router;
