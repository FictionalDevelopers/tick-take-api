import { Router } from 'express';

import * as AuctionController from './controller';

const router = Router();

router.post('/', AuctionController.create);

export default router;
