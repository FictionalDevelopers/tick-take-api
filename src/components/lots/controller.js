import { createLot } from './service';

export const create = async (req, res, next) => {
  const { name, description } = req.body;
  const creator = '5e43bd6ce439d63bfd9e0f96';
  try {
    const lot = await createLot({ name, description, creator });

    return res.json(lot);
  } catch (e) {
    return next(e);
  }
};
