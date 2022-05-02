import MovieModal from '../models/movie.js';
import TheaterModal from '../models/theater.js';
import ResponseHelper from '../helpers/responseHelper.js';
import { codes, movieConstants } from '../constants/index.js';

const { CREATED, NOT_FOUND, SUCCESS } = codes;
const { MOVIE_ADD_SUCCESS, MOVIE_ADD_FAILED, MOVIE_LIST_FETCH_SUCCESS } =
  movieConstants;

/**
 * Handle new movie request
 * @param {*} req
 * @param {*} res
 */
export const postMovie = async (req, res) => {
  const { name, show_time, cast, banner, theater } = req.body;

  try {
    const obj = new MovieModal({ name, show_time, cast, banner, theater });

    const movie = await obj.save();

    if (!movie) {
      return ResponseHelper.response(
        res,
        false,
        400,
        NOT_FOUND,
        MOVIE_ADD_FAILED,
        {}
      );
    }

    await TheaterModal.findByIdAndUpdate(theater, {
      $push: { movies: movie._doc._id },
    });

    return ResponseHelper.response(
      res,
      true,
      201,
      CREATED,
      MOVIE_ADD_SUCCESS,
      movie._doc
    );
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await MovieModal.find().populate('theater');

    return ResponseHelper.response(
      res,
      true,
      200,
      SUCCESS,
      MOVIE_LIST_FETCH_SUCCESS,
      { movies }
    );
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};
