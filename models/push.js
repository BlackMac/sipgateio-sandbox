var globalio = null
var sockets = {}

exports.serve = (server) => {
    globalio = require('socket.io')(server)

    globalio.on('connection', function (socket) {
        let token = socket.handshake.query.token;
        sockets[token] = socket
        console.log("socket connected for " + token)
    })
}

exports.send = (token, data) => {
    if (typeof sockets[token] === "undefined") return;
    sockets[token].emit('sipgateio', data)
}