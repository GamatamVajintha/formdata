'use strict';

/**
 * A set of functions called "actions" for `align`
 */

module.exports = {
  postData:async(ctx)=>{
   try{
     const {name,email,phoneNo}=ctx.request.body.data
     const entry=await strapi.service("api::align.align").postData(name,email,phoneNo)
     console.log(entry)
     return entry
   }
   catch(err){
     console.log(err)
   }
  }
 };
 