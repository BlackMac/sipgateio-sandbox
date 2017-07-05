const webhook=require('../models/push')

exports.get = (req, res) => {
    webhook.send(req.sandbox.id, req.body)
    res.send("Done")
}