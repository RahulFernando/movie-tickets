import CartModal from '../models/cart.js';
import ResponseHelper from '../helpers/responseHelper.js';
import { codes, cartConstants } from '../constants/index.js';

const { CREATED, UPDATED, FAILED } = codes;
const { ADD_CART_SUCCESS, ADD_CART_FAILED } = cartConstants;

export const addToCart = async (req, res) => {
  const { movies, total_price, user } = req.body;
  try {
    let cart = await CartModal.findOneAndUpdate(
      { user },
      { movies, total_price }
    );

    if (!cart) {
      cart = await CartModal.create({ movies, total_price, user });

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
        201,
        CREATED,
        ADD_CART_SUCCESS,
        {}
      );
    }

    return ResponseHelper.response(
      res,
      true,
      200,
      UPDATED,
      ADD_CART_SUCCESS,
      {}
    );
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};
