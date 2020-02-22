import LotModel from './model';

export const createLot = ({ name, description, creator }) =>
  LotModel.create({ name, description, creator });

export const loadLots = params => LotModel.find(params);

export const loadLot = id => LotModel.find({ _id: id });

export const getLotsCount = params => LotModel.countDocuments(params);
