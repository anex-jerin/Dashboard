import Product from '../model/Product.js';
import ProductStat from '../model/ProductStat.js';
import User from '../model/User.js';

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

export const getCustomer = async(req,res) => {

  try {
    const customer = await User.find({role:'user'}).select('-password')
    res.status(200).json(customer)
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
}