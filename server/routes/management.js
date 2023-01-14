import express from 'express';
import {getAdmins} from '../controller/management.js'

const router = express.Router();

router.get('/admins' , getAdmins )

export default router;
