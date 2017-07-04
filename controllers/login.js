const sipgate = require('../models/sipgate')

exports.get = (req, res) => {
    req.session.bearer = null
    res.render('login', { token: req.sandbox.id, redirect: req.protocol + '://' + req.get('host')+"/login/oauth" })
}

exports.authenticate = (req, res) => {
    const code = req.query.code || null
    const redirectUri = req.protocol + '://' + req.get('host') + "/login/oauth"

    sipgate.getToken(code, redirectUri).then((token) => {
        req.session.bearer = token
        res.redirect(req.protocol + '://' + req.get('host') + '/')
    })
}