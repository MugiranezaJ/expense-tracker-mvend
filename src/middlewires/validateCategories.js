import Joi from 'joi'
import BadRequestError from '../utils/badRequest';

export const validateCategoryCreate= (req, res, next) =>{
    const schema = Joi.object({
        name: Joi.string().required().messages({
            "any.required":"Name is required"
        }),
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}


export const validateCategoryUpdate= (req, res, next) =>{
    const schema = Joi.object({
        name: Joi.string(),
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}

export const validateCategoryView= (req, res, next) =>{
    const schema = Joi.object({
        categoryId: Joi.number().messages({
            "number.base":"CategoryId must be a number"
        }),
        id: Joi.number().messages({
            "number.base":"id must be a number"
        }),
    })
  const { error } = schema.validate(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  next();
}