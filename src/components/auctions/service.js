import AuctionModel from './model';

export const createAuction = data => AuctionModel.create(data);

export const getAuctions = params => AuctionModel.find(params);
