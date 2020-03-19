import { Schema, model } from 'mongoose';
import { model as UserModel } from '@app/components/users';
import LOT_STATUSES from '../../constants/lotStatuses';

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
      enum: Object.values(LOT_STATUSES),
      default: LOT_STATUSES.AVAILABLE,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Lot', LotSchema);
