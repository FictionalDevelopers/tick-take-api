import AuctionModel from './model';

export const createAuction = data => AuctionModel.create(data);

export const loadAuction = (id, field) =>
  AuctionModel.findOne({ _id: id }).populate(field);

export const getAuctionsCount = params => AuctionModel.countDocuments(params);

export const loadAuctions = (params, field) =>
  AuctionModel.find(params).populate(field);
