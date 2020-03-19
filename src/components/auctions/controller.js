import { createAuction } from './service';
import { isLotTaken, updateLot } from '../lots/service';
import LOT_STATUSES from '../../constants/lotStatuses';

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

    const [auction] = await Promise.all([
      createAuction({
        minimumAcceptablePrice,
        minimumStep,
        lot: lotId,
      }),
      updateLot(lotId, { status: LOT_STATUSES.IN_SALE }),
    ]);

    return res.json(auction);
  } catch (e) {
    return next(e);
  }
};
