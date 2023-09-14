'use strict';

module.exports={
    postData:async(name,email,phoneNo)=>{
        try{
            const currentDate = new Date()
            const newEntry=await strapi.entityService.create("api::form-data.form-data",{data:{name:name,email:email,phoneNo:phoneNo,publishedAt:currentDate}})
            console.log(newEntry)
            return newEntry
        }
        catch(err){
            console.log(err)
        }
    }
}
