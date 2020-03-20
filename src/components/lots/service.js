import LotModel from './model';
import { loadAuctions } from '../auctions/service';

export const createLot = data => LotModel.create(data);

export const loadLots = params => LotModel.find(params);

export const loadLot = id => LotModel.findOne({ _id: id });

export const updateLot = (id, data) => LotModel.updateOne({ _id: id }, data);

export const getLotsCount = params => LotModel.countDocuments(params);

export const isLotTaken = async lotId => {
  const auctions = await loadAuctions({ lot: lotId });
  return !!auctions.length;
};
