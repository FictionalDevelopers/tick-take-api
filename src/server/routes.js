import { Router } from 'express';

import { router as AuthRouter } from '../components/auth';
import { router as LotRouter } from '../components/lots';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/lots', LotRouter);

export default router;
