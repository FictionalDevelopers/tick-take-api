import { Schema, model } from 'mongoose';

import { model as UserModel } from '../users';

const LotSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Lot', LotSchema);
