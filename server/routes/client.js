import express from 'express';
import {getProducts,getCustomer} from '../controller/client.js' 


const router = express.Router();

router.get('/products', getProducts)
router.get('/customers', getCustomer)

export default router;
