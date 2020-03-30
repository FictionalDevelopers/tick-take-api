import { Router } from 'express';
import authorized from '@app/middlewares/authorized';
import * as LotController from './controller';
import { validateLot } from './validation';
import getPaginationData from '@app/middlewares/pagination';

const router = Router();

router.post('/', authorized, validateLot(), LotController.create);
router.get('/', getPaginationData(), LotController.getLots);
router.get('/:lotId', LotController.getLot);

export default router;
