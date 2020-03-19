import { createLot, loadLots, loadLot, getLotsCount } from './service';

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

export const getLots = async (req, res, next) => {
  const params = {};
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;

  if (req.query.user) {
    params.creator = req.query.user;
  }

  if (req.query.status) {
    params.status = req.query.status;
  }

  try {
    const lots = await loadLots(params)
      .skip(limit * page - limit)
      .limit(limit);
    const lotsCount = await getLotsCount(params);

    const data = {
      items: lots,
      currentPage: page,
      pages: Math.ceil(lotsCount / limit),
      count: lotsCount,
    };

    return res.json(data);
  } catch (e) {
    return next(e);
  }
};

export const getLot = async (req, res, next) => {
  const lotId = req.params.lotId;

  try {
    const lot = await loadLot(lotId);

    return res.json(lot);
  } catch (e) {
    return next(e);
  }
};
