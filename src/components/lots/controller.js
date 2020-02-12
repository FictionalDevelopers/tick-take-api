import { validationResult } from 'express-validator';
import { createLot, isLotExist } from './service';
import errorFormatter from '../../utils/errorFormatter';

export const create = async (req, res, next) => {
  const result = validationResult(req).formatWith(errorFormatter);

  if (!result.isEmpty()) {
    return res.status(400).json(result.mapped());
  }

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
