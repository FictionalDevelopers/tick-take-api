import {
  createAuction,
  loadAuction,
  loadAuctions,
  getAuctionsCount,
} from './service';
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

export const getAuction = async (req, res, next) => {
  const auctionId = req.params.auctionId;

  try {
    const lot = await loadAuction(auctionId);

    return res.json(lot);
  } catch (e) {
    return next(e);
  }
};

export const getAuctions = async (req, res, next) => {
  const params = {};
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;

  if (req.query.status) {
    params.status = req.query.status;
  }

  try {
    const auctions = await loadAuctions(params)
      .skip(limit * page - limit)
      .limit(limit);
    const auctionsCount = await getAuctionsCount(params);

    const data = {
      items: auctions,
      currentPage: page,
      pages: Math.ceil(auctionsCount / limit),
      count: auctionsCount,
    };

    return res.json(data);
  } catch (e) {
    return next(e);
  }
};
