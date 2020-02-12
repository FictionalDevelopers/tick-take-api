import { Router } from 'express';
import * as LotController from './controller';

const router = Router();

router.post('/', LotController.create);

export default router;
