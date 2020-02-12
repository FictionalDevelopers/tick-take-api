import { createLot } from './service';

export const create = async (req, res, next) => {
  const {
    user: { id },
    body: { name, description },
  } = req;

  try {
    const lot = await createLot({ name, description, creator: id });

    return res.json(lot);
  } catch (e) {
    return next(e);
  }
};
