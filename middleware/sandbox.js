const collection = require('../models/sandbox')

module.exports = (req, res, next) => {
    const host = req.get('host')
    let id = host.match(/^[^\.]+/)[0]
    let hostname = host.replace(/^[^\.]+\./, "")
    if (id.length !== 16) {
        collection.create().then((token) => {
            res.redirect(req.protocol + '://' + token + "." + hostname + '/')
        })
    } else {
        req.sandbox = {
            'id': id,
            'host': hostname
        }
        next()
    }
}