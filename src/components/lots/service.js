import LotModel from './model';

export const createLot = ({ name, description, creator }) => {
  return LotModel.create({ name, description, creator });
};

export const isLotExist = async name => {
  const lot = await LotModel.findOne({ name });

  return lot !== null;
};
