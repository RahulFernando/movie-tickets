import express from 'express';
import { postMovie } from '../controllers/movies.js';

const router = express.Router();

router.post('/movies', postMovie);

export default router;