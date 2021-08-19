import joi from "joi";

export default function MeetupValidate(data) {
  const schema = joi.object({
    name: joi.string().min(3).max(30).required(),
    address: joi.string().required(),
    image: joi.string(),
    date: joi.date().min("now").required(),
    from: joi.string().required(),
  });

  return schema.validate(data);
}
