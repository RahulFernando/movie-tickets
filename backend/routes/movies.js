import express from 'express';
import { postMovie, getMovies } from '../controllers/movies.js';

const router = express.Router();

router.post('/movies', postMovie);
router.get('/movies', getMovies);

export default router;