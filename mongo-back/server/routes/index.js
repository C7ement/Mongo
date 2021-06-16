const userMiddleware = require("../middleware/users");
const itemsController = require('../controllers').items;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));


    // app.post('/api/todos', userMiddleware.isLoggedIn, todosController.create);
  app.post('/api/items', userMiddleware.isLoggedIn, itemsController.create);
  app.get('/api/items', userMiddleware.isLoggedIn, itemsController.list);
  app.get('/api/items/:id', userMiddleware.isLoggedIn, itemsController.retrieve);
  app.put('/api/items/:id', userMiddleware.isLoggedIn, itemsController.update);
  app.delete('/api/items/:id', userMiddleware.isLoggedIn, itemsController.destroy);


  app.post('/api/items/:id/children', userMiddleware.isLoggedIn, itemsController.addChild);
  app.delete('/api/items/:id/children/:childId', userMiddleware.isLoggedIn, itemsController.removeChild);


  app.post('/api/login', userMiddleware.login);

  // For any other request method, we're going to return "Method Not Allowed"
  app.all('/api/', (req, res) =>
      res.status(405).send({
        message: 'Method Not Allowed',
      }));
};