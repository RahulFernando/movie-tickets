import express from 'express';
import { postMovie, putMovie, getMovies, deleteMovie } from '../controllers/movies.js';

const router = express.Router();

router.post('/movies', postMovie);
router.put('/movies', putMovie);
router.delete('/movies/:id', deleteMovie);
router.get('/movies', getMovies);

export default router;