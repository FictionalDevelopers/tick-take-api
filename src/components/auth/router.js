import { Router } from 'express';
import * as AuthController from './controller';

const router = Router();

router.post('/register', AuthController.create);

export default router;
