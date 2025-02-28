import Joi from 'joi';
const validationJS = {
validateLoginUser : (data) => {
  const schema = Joi.object({
    userid: Joi.string().min(6).required(),
    pass: Joi.string().min(8).required(),
  });
  return schema.validate(data);
},
 validateUser : (data) => {
  const schema = Joi.object({
    userid:Joi.string().min(8).required(),
    name: Joi.string().min(6).required(),
    email: Joi.string().min(10).email().required(),
    pass:Joi.string().min(8).required(),
    createdby:Joi.string().min(6),
  });

  return schema.validate(data);
}
}
export default validationJS;

