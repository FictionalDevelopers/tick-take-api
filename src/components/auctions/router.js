import { Router } from 'express';
import authorized from '@app/middlewares/authorized';
import { validateAuction } from './validation';

import * as AuctionController from './controller';

const router = Router();

router.post('/', authorized, validateAuction(), AuctionController.create);
router.get('/:auctionId', AuctionController.getAuction);
router.get('/', AuctionController.getAuctions);

export default router;
