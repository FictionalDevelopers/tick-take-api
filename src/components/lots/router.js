import { Router } from 'express';
import * as LotController from './controller';
import authorized from '../../middlewares/authorized';
import { validateLot } from './validation';

const router = Router();

router.post('/', authorized, validateLot(), LotController.create);

export default router;
