import nodemailer from 'nodemailer';
import Axios from 'axios';
import CartModal from '../models/cart.js';
import UserModal from '../models/user.js';
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
    const userObj = await UserModal.findOne({ _id: user });

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

    await sendEmail(userObj.email);
    await sendSms(userObj.mobile);

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

/**
 * Handle sending sms
 * @param {String} mobile 
 */
const sendSms = async (mobile) => {
  const api = 'https://app.notify.lk/api/v1/send';
  const userId = process.env.USER_ID;
  const apiKey = process.env.API_KEY;
  const message = 'You have ordered tickets';

  return await Axios.post(
    `${api}?user_id=${userId}&api_key=${apiKey}&sender_id=NotifyDEMO&to=${mobile}&message=${message}`
  );
};

/**
 * Handle sending email
 * @param {String} email 
 */
const sendEmail = async (email) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.USER_MAIL}`,
      pass: `${process.env.USER_PSW}`,
    },
  });

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: email,
    subject: 'Movie Ticketing',
    text: 'You tickets are ordered successfully!',
  };

  await transporter.sendMail(mailOptions);
};
