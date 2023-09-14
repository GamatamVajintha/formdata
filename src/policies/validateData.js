'use strict';


const Joi = require('joi')
module.exports = async(ctx,next)=> {
  try{
   console.log("it is working")
    const {name,email,phoneNo}=ctx.request.body.data;
    const schema = Joi.object(
      {
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        phoneNo:Joi.string().pattern(/^\+91\s\d{10}$/).required()
      } 
    )
    const {error}=schema.validate({name,email,phoneNo});
    console.log(error);
    if(error){
      return {
       errorCode : 500,
       message : "some thimg went wrong :/"
      };
    }
    await next()
    console.log(name,email,phoneNo)
 }
    catch(err)
    {
  console.log(err)
    }
 }

