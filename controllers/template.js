const sandboxModel = require("../models/sandbox"),
      fs = require("fs")

exports.get = (req, res) => {
    fs.readFile('./template/'+req.params.filename+'/code.js', (err, script) => {
        fs.readFile('./template/'+req.params.filename+'/code.html', (err, html) => {
            sandboxModel.create(null, script, html).then((token) => {
                res.redirect(req.protocol + '://' + token + "." + req.sandbox.host + '/')
            })
        })
    })
}