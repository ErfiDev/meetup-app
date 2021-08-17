import Joi from "joi";

export default function userValidate(data) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(22).alphanum().required(),
    password: Joi.string().min(8).max(22).required(),
    email: Joi.string().email().required(),
  });

  return schema.validate(data);
}
