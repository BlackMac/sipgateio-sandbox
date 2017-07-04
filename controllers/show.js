const sandboxModel = require("../models/sandbox")

exports.get = (req, res) => {
    sandboxModel.get(req.sandbox.id).then((sandbox) => {
        res.render('render', {bearer: req.session.bearer, html: sandbox['html'], script: sandbox['script'] })
    });
}