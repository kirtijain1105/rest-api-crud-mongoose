const common=require('./common');
const bookRoutes = (app) => {

    app.get('/GetBooks', (req, res) => {
        common.Book.find(function(err, data) {
            
            if (err)
               res.send(err);
            res.json(data); 
         });
      });
};

module.exports = bookRoutes;