const homeController = require("./controllers/home"),
      loginController = require("./controllers/login"),
      staticController = require("./controllers/static"),
      saveController = require("./controllers/save"),
      templateController = require("./controllers/template"),
      showController = require("./controllers/show"),
      authMiddleware = require('./middleware/auth')

module.exports = (app) => {
    app.get('/', authMiddleware, homeController.get)
    app.get('/login', loginController.get)
    app.get('/login/oauth', loginController.authenticate)
    app.get('/static/:filename', staticController.get)
    app.get('/show', showController.get)
    app.post('/save', saveController.update)
    app.get('/template/:filename', templateController.get)
}
