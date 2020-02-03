import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({ success: true });
});

router.post('/', (req, res) => {
  return res.json(req.body);
});

export default router;
