const homeController = require("./controllers/home"),
      loginController = require("./controllers/login"),
      staticController = require("./controllers/static"),
      saveController = require("./controllers/save"),
      templateController = require("./controllers/template"),
      webhookController = require("./controllers/webhook"),
      showController = require("./controllers/show"),
      authMiddleware = require('./middleware/auth'),
      domainMiddleware = require('./middleware/domain')

module.exports = (app) => {
    app.get('/', domainMiddleware, authMiddleware, homeController.get)
    app.get('/login', loginController.get)
    app.get('/login/oauth', loginController.authenticate)
    app.get('/static/:filename', staticController.get)
    app.get('/show', domainMiddleware, showController.get)
    app.post('/save', domainMiddleware, saveController.update)
    app.get('/template/:filename', templateController.get)
    app.post('/webhooks', domainMiddleware, webhookController.get)
}
