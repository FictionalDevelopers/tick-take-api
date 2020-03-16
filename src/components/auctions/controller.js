import { createAuction, isLotTaken } from './service';

export const create = async (req, res, next) => {
  const {
    body: {
      endTime,
      minimumAcceptablePrice,
      minimumStep,
      startTime,
      lotId,
      status,
    },
  } = req;

  try {
    if (await isLotTaken(lotId)) {
      return res.status(401).json({
        error: 'Lot is taken',
      });
    }

    const auction = await createAuction({
      startTime,
      endTime,
      minimumAcceptablePrice,
      minimumStep,
      lot: lotId,
      status,
    });

    return res.json(auction);
  } catch (e) {
    return next(e);
  }
};
