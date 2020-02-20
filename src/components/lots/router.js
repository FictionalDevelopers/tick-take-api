import * as LotController from './controller';
import { validateLot } from './validation';
import { Router } from 'express';
import authorized from '@app/middlewares/authorized';

const router = Router();

router.post('/', authorized, validateLot(), LotController.create);
router.get('/', LotController.getLots);
router.get('/:lotId', LotController.getLot);

export default router;
