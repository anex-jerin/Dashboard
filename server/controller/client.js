import Product from '../model/Product.js';
import ProductStat from '../model/ProductStat.js';
import User from '../model/User.js';
import Transction from '../model/Transaction.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customer = await User.find({ role: 'user' }).select('-password');
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = '' } = req.query;

    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.filed]: (sortParsed.sort = 'asc' ? 1 : -1),
      };
      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transction.find({
      $or: [
        { cost: { $regex: new RegExp(search, 'i') } },
        { userId: { $regex: new RegExp(search, 'i') } },
      ],
    })
      .sort(sortFormatted)
      // .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transction.countDocuments({
      userId: { $regex: search, $options: 'i' },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};
