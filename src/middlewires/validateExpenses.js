import Joi from 'joi'
import BadRequestError from '../utils/badRequest';

export const validateExpenseCreate= (req, res, next) =>{
    const schema = Joi.object({
        name: Joi.string().required().messages({
            "any.required":"Name is required"
        }),
        amount: Joi.number().required().messages({
            "any.required":"Amount is required"
        }),
        number: Joi.number().messages({
            "number.base":"number must be a number"
        }),
        categoryId: Joi.string().required().messages({
            "any.required":"CategoryId is required"
        }),
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}


export const validateExpenseUpdate= (req, res, next) =>{
    const schema = Joi.object({
        toBeUpdated:Joi.object({
            name: Joi.string(),
            amount: Joi.number(),
            number: Joi.number()
        }).required()
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}

export const validateExpenseView= (req, res, next) =>{
    const schema = Joi.object({
        categoryId: Joi.string().messages({
            "number.base":"CategoryId must be a string"
        }),
        id: Joi.string().messages({
            "number.base":"id must be a string"
        }),
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}