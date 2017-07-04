const sandboxModel = require("../models/sandbox")

exports.get = (req, res) => {
    sandboxModel.get(req.sandbox.id).then((playground) => {
        let frame = req.protocol + '://' + req.get('host')+"/show";
        res.render('edit', {
            bearer: req.session.bearer,
            code: playground['script'],
            html: playground['html'],
            framesource: frame,
            token: req.sandbox.id
        })
    }).catch(() => {
        res.redirect(req.protocol + '://new.' + req.sandbox.host + '/')
    })
 }