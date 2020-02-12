import { Router } from 'express';

import { router as AuthRouter } from '@app/components/auth';
import { router as LotRouter } from '@app/components/lots';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/lots', LotRouter);

export default router;
