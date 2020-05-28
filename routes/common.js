
const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/book',{
    useNewUrlParser:true,
    useCreateIndex:true
});

const Book= mongoose.model('Book',{Author:{type:String},Name:{type:String},Id:{type:Number}});


module.exports={Book};
  