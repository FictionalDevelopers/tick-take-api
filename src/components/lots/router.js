import { Router } from 'express';
import authorized from '@app/middlewares/authorized';

import * as LotController from './controller';
import { validateLot } from './validation';

const router = Router();

router.post('/', authorized, validateLot(), LotController.create);

export default router;
