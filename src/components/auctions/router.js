import { Router } from 'express';
import authorized from '@app/middlewares/authorized';
import getPaginationData from '@app/middlewares/pagination';
import { validateAuction } from './validation';

import * as AuctionController from './controller';

const router = Router();

router.post('/', authorized, validateAuction(), AuctionController.create);
router.get('/:auctionId', AuctionController.getAuction);
router.get('/', getPaginationData(), AuctionController.getAuctions);

export default router;
