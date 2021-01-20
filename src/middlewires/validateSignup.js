import Joi from 'joi'
import BadRequestError from '../utils/badRequest';

export const validateSignup = (req, res, next) =>{
    const schema = Joi.object({
        email: Joi.string().required().messages({
            "any.required":"Email is required"
        }),
        password: Joi.number().required().messages({
            "any.required":"Password is required"
        }),
        confirm_password: Joi.string().required().messages({
            "any.required":"Confirm password"
        }),
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}