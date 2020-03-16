import { createAuction, isLotTaken } from './service';

export const create = async (req, res, next) => {
  const {
    body: { minimumAcceptablePrice, minimumStep, lotId },
  } = req;

  try {
    if (await isLotTaken(lotId)) {
      return res.status(401).json({
        error: 'Lot is taken',
      });
    }

    const auction = await createAuction({
      minimumAcceptablePrice,
      minimumStep,
      lot: lotId,
    });

    return res.json(auction);
  } catch (e) {
    return next(e);
  }
};
