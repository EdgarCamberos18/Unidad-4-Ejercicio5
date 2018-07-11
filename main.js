var mongoose = require('mongoose');
var userSchema = require('./userSchema');


//conexion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos',{useMongoClient:true});


//modelo
var User = mongoose.model('User',userSchema,"users");




User.update({_id: '5b45878d8ef6fe107cb1b201'},{$set:{email:'changed@ittepic.edu.mx'}},function(error,docs){ 
    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log("<------------Actualizacion---------->")
    console.log(docs)
    process.exit(0)
});

