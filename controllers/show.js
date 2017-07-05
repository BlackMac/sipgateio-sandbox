const sandboxModel = require("../models/sandbox")

exports.get = (req, res) => {
    sandboxModel.get(req.sandbox.id).then((sandbox) => {
        let socketuri = req.protocol + '://' + req.sandbox.id + "." + req.sandbox.host + "?token="+req.sandbox.id
        let pushuri = req.protocol + '://' + req.sandbox.id + "." + req.sandbox.host + "/webhooks"
        res.render('render', {
            bearer: req.session.bearer,
            socketuri: socketuri,
            pushuri: pushuri,
            html: sandbox['html'],
            script: sandbox['script'] })
    });
}