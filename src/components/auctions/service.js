import AuctionModel from './model';

export const createAuction = data => AuctionModel.create(data);

export const loadAuction = id => AuctionModel.findOne({ _id: id });

export const getAuctionsCount = params => AuctionModel.countDocuments(params);

export const loadAuctions = params => AuctionModel.find(params);
