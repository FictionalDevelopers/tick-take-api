import LotModel from './model';

export const createLot = ({ name, description, creator }) => {
  return LotModel.create({ name, description, creator });
};
