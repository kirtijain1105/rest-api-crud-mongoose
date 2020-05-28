const common = require('./common');

const deleteBookRoutes = (app) => {
    app.delete('/DeleteBook/:id', (req, res) => {

        common.Book.deleteOne({Id:req.params["id"]}, function(err, bear) {
            if (err)
               res.send(err);
            res.json({ message: 'Successfully deleted' });
         });
      });
}

module.exports=deleteBookRoutes;