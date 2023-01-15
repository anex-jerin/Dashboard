import mongoose from 'mongoose';
const { Schema } = mongoose;

const AffiliateStatSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: 'Transactions',
    },
  },
  {
    timestamps: true,
  }
);
const AffiliateStat = mongoose.model('AffiliateStat', AffiliateStatSchema);

export default AffiliateStat;
