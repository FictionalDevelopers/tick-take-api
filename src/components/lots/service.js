import LotModel from './model';

export const createLot = ({ name, description, creator }) =>
  LotModel.create({ name, description, creator });

export const loadLots = ({ params, limit, page }) =>
  LotModel.find(params)
    .skip(limit * page - limit)
    .limit(limit);

export const loadLot = id => LotModel.find({ _id: id });

export const getLotsCount = () => LotModel.countDocuments({});
