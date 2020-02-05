import { Router } from 'express';

import {AuthRouter} from "./components/auth";

const router = Router();

router.use('/auth', AuthRouter);

export default router;
