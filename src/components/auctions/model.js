import { Schema, model } from 'mongoose';
import { model as LotModel } from '@app/components/lots';
import AUCTION_STATUSES from '../../constants/auctionStatuses';

const AuctionSchema = new Schema({
  minimumAcceptablePrice: {
    type: Number,
    required: true,
  },
  minimumStep: {
    type: Number,
    required: true,
  },
  lot: {
    type: Schema.Types.ObjectId,
    ref: LotModel,
    required: true,
  },
  endTime: {
    type: Date,
  },
  startTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: Object.values(AUCTION_STATUSES),
    default: AUCTION_STATUSES.PENDING,
  },
});

export default model('Auction', AuctionSchema);
