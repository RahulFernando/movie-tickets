import UserModal from '../models/user.js';
import ResponseHelper from '../helpers/responseHelper.js';

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
      ResponseHelper.response(
        res,
        false,
        400,
        'FAILED',
        'User not registered',
        {}
      );
    }

    return ResponseHelper.response(
      res,
      true,
      200,
      'SUCCESS',
      'User registered',
      user._doc
    );
  } catch (error) {
    return ResponseHelper.error(res, error);
  }
};
