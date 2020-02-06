import { Router } from 'express';

import { router as AuthRouter } from './components/auth';

const router = Router();

router.use('/auth', AuthRouter);

export default router;
