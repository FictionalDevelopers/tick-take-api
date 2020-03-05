import { createAuction } from './service';

export const create = async (req, res, next) => {
  const {
    body: { endTime, minimumAcceptablePrice, minimumStep, lotId, status },
  } = req;

  try {
    const auction = await createAuction({
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
