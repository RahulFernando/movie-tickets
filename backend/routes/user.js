import express from 'express';
import { register } from '../controllers/user.js';

const router = express.Router();

router.post('/users', register);

export default router;
