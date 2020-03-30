import AuctionModel from './model';

export const createAuction = data => AuctionModel.create(data);

export const loadAuction = (id, field) => {
  if (field) {
    return AuctionModel.findOne({ _id: id }).populate(field);
  }
  return AuctionModel.findOne({ _id: id });
};

export const getAuctionsCount = params => AuctionModel.countDocuments(params);

export const loadAuctions = (params, field) => {
  if (field) {
    return AuctionModel.find(params).populate(field);
  }
  return AuctionModel.find(params);
};
