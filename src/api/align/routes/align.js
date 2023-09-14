
module.exports={
  routes:[
    {
           "method":"POST",
           "path":'/userdata',
           "handler":'align.postData',
           "config":{
            "policies":["global::validateData"],
           }
    }
  ]
}