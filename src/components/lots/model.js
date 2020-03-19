import { Schema, model } from 'mongoose';
import { model as UserModel } from '@app/components/users';
import lotStatuses from '../../enums/lotStatuses';

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
    status: {
      type: String,
      enum: Object.values(lotStatuses),
      default: lotStatuses.AVAILABLE,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Lot', LotSchema);
