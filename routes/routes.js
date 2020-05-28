// load up our shiny new route for users
const getBooksRoutes = require('./get-books');
const saveBookRoutes = require('./save-book');
const updateBookRoutes = require('./update-book');
const deleteBookRoutes = require('./delete-book');
const appRouter = (app) => {

    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });
    getBooksRoutes(app);
    saveBookRoutes(app);
    updateBookRoutes(app);
    deleteBookRoutes(app);
};

module.exports = appRouter;