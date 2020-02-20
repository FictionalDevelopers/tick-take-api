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

  if (req.query.id) {
    params.creator = req.query.id;
  }

  try {
    const lots = await loadLots({ params, limit, page });
    const lotsCount = await getLotsCount();

    const data = {
      items: lots,
      currentPage: page,
      pages: Math.ceil(lotsCount / page),
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
