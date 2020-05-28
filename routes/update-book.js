const common = require('./common');

const updateBookRoutes = (app) => {
app.put('/UpdateBook/:id', (req, res) => {

    common.Book.updateOne({Id:req.params["id"]},{Author:req.body.author,Name:req.body.name}, function(err, bear) {
        if (err)
           res.send(err);
        res.json({ message: 'Successfully updated' });
     });
  });
}

module.exports=updateBookRoutes;