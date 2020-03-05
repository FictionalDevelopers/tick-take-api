import { Router } from 'express';

import { router as AuthRouter } from '@app/components/auth';
import { router as LotRouter } from '@app/components/lots';
import { router as AuctionRouter } from '@app/components/auctions';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/lots', LotRouter);
router.use('/auctions', AuctionRouter);

export default router;
