import UserModal from '../models/user.js';
import ResponseHelper from '../helpers/responseHelper.js';
import { codes, userConstants } from '../constants/index.js';

const { CREATED, NOT_FOUND, SUCCESS } = codes;
const {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  INVALID_USERNAME,
  INVALID_PASSWORD,
} = userConstants;

export const register = async (req, res) => {
  const { user_name, email, mobile, role, password } = req.body;
  try {
    const obj = new UserModal({
      user_name,
      email,
      mobile,
      role,
      password,
    });

    const user = await obj.save();

    if (!user) {
      ResponseHelper.response(res, false, 400, NOT_FOUND, REGISTER_FAILED, {});
    }

    return ResponseHelper.response(
      res,
      true,
      201,
      CREATED,
      REGISTER_SUCCESS,
      user._doc
    );
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};

export const login = async (req, res) => {
  const { user_name, password } = req.body;

  try {
    const user = await UserModal.findOne({ user_name });

    if (!user) {
      return ResponseHelper.response(
        res,
        false,
        404,
        NOT_FOUND,
        INVALID_USERNAME,
        {}
      );
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return ResponseHelper.response(
        res,
        false,
        404,
        NOT_FOUND,
        INVALID_PASSWORD,
        {}
      );
    }

    const obj = {
      user_name: user._doc.user_name,
      email: user._doc.email,
      role: user._doc.role,
    };

    return ResponseHelper.response(res, true, 200, SUCCESS, LOGIN_SUCCESS, obj);
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};
