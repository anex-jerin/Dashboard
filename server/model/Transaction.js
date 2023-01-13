import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const transactionSchema = new Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model('transaction', transactionSchema);

export default Transaction;
