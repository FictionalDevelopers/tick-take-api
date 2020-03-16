import AuctionModel from './model';

export const createAuction = data => AuctionModel.create(data);

export const getAuctions = params => AuctionModel.find(params);

export const isLotTaken = async lotId => {
  const auctions = await getAuctions({ lot: lotId });
  return !!auctions.length;
};
