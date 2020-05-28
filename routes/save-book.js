const common = require('./common');
const saveBookRoutes = (app) => {
  app.post('/SaveBook', (req, res) => {
    var books;
    common.Book.find(function(err, data) {
        
    const newUserId = Object.keys(data).length + 1;
    var  book1 = new common.Book({Author:req.body.Author,Name:req.body.Name,Id:newUserId});
    //console.log(req.body.Name);
     book1.save().then(()=>{
     res.send("book saved");
       }).catch((err)=>{
           console.log(err);
       }); 
      });       
});

}


module.exports = saveBookRoutes;