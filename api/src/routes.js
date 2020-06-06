const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Routes Dev
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/:_id', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;