import Joi from 'joi';

/**
 * Password validator, rules:
 * 1. At least 6 characters
 * 2. Must contain at least one upper case letter
 */

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
  signup: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
  }
}
