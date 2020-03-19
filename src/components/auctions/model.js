import { Schema, model } from 'mongoose';
import { model as LotModel } from '@app/components/lots';
import auctionStatuses from '../../enums/auctionStatuses';

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
    enum: Object.values(auctionStatuses),
    default: auctionStatuses.PENDING,
  },
});

export default model('Auction', AuctionSchema);
