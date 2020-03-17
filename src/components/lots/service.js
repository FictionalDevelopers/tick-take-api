import LotModel from './model';
import { getAuctions } from '../auctions/service';

export const createLot = ({ name, description, creator }) =>
  LotModel.create({ name, description, creator });

export const loadLots = params => LotModel.find(params);

export const loadLot = id => LotModel.find({ _id: id });

export const getLotsCount = params => LotModel.countDocuments(params);

export const isLotTaken = async lotId => {
  const auctions = await getAuctions({ lot: lotId });
  return !!auctions.length;
};
