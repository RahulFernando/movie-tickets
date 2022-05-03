import CartModal from '../models/cart.js';
import ResponseHelper from '../helpers/responseHelper.js';
import { codes, cartConstants } from '../constants/index.js';

const { CREATED, FAILED } = codes;
const { ADD_CART_SUCCESS, ADD_CART_FAILED } = cartConstants;

/**
 * Handle add to cart request
 * @param {*} req
 * @param {*} res
 */
export const addToCart = async (req, res) => {
  const { movies, total_price, user } = req.body;
  try {
    let cart = await CartModal.create({ movies, total_price, user });

    if (!cart) {
      return ResponseHelper.response(
        res,
        false,
        400,
        FAILED,
        ADD_CART_FAILED,
        {}
      );
    }

    return ResponseHelper.response(
      res,
      true,
      200,
      CREATED,
      ADD_CART_SUCCESS,
      cart._doc
    );
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};
