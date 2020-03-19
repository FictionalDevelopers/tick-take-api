import { createAuction } from './service';
import { isLotTaken, updateLot } from '../lots/service';
import lotStatuses from '../../enums/lotStatuses';

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

    await updateLot(lotId, { status: lotStatuses.IN_SALE });

    return res.json(auction);
  } catch (e) {
    return next(e);
  }
};
