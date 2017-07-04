const sandboxModel = require("../models/sandbox")

exports.update = (req, res) => {
    sandboxModel.update(req.sandbox.id, req.body.script, req.body.html).then(() => {
        res.status(200).json("done");
    }).catch(() => {
        res.status(500).json("error");
    })
}