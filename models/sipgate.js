const http = require("https"),
      querystring = require('querystring'),
      config = require('../config')

// TODO: reject on error
exports.getToken = (code, redirectUri) => {
    return new Promise((resolve, reject) => {
        const query = querystring.stringify({
            client_id: config.client_id,
            client_secret: config.client_secret,
            code: code,
            grant_type: "authorization_code",
            redirect_uri: redirectUri
        });

        const headers = {
            'User-Agent':       'sipgate.io sandbox 0.0.1',
            'Content-Type':     'application/x-www-form-urlencoded'
        }

        const options = {
            host: 'api.sipgate.com',
            port: '443',
            path: '/v1/authorization/oauth/token',
            method: 'POST',
            headers: headers}

        const post_req = http.request(options, (result) => {
            result.on('data', function (chunk) {
                const data = JSON.parse(chunk)
                resolve(data.access_token)
            });
        })

        post_req.write(query);
        post_req.end();
    })
}