import { Router } from 'express';
import * as LotController from './controller';
import authorized from '../../middlewares/authorized';

const router = Router();

router.post('/', authorized, LotController.create);

export default router;
