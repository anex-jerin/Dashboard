import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3500;

/* Test*/
import User from './model/User.js';
import Product from './model/Product.js';
import ProductStat from './model/ProductStat.js';
import Transaction from './model/Transaction.js';
import OverallStats from './model/overallStats.js';
import { dataUser, dataProduct, dataProductStat,dataTransaction,dataOverallStat } from './data/index.js';

/* ROUTES */

app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

async function main() {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, (req, res) => console.log(`connected to port ${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
}

main();
