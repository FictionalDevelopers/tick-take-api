import { createLot, isLotExist } from './service';

export const create = async (req, res, next) => {
  const {
    user: { id },
    body: { name, description },
  } = req;

  if (await isLotExist(name)) {
    return res.status(400).json({
      lot: 'Lot already exists',
    });
  }

  try {
    const lot = await createLot({ name, description, creator: id });

    return res.json(lot);
  } catch (e) {
    return next(e);
  }
};
