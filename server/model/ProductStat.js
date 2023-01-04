import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductStatSchema = new Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const ProductStat = mongoose.model('ProductStat', ProductStatSchema);

export default ProductStat;
