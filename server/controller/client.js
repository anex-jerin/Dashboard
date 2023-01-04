import Product from '../model/Product.js';
import ProductStat from '../model/ProductStat.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
            productId:product._id
        })
        return {
            ...product._doc,
            stat
        }
      })
    );
    res.status(200).json(productsWithStats)
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};
