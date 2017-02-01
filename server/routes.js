var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '547507fcb7074cfe8b009156bad5812e',
    clientSecret: '69348f00e04041e8bb04750cb69e0fb9',
    redirectUri: 'http://localhost/'
});


module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendfile('./public/index.html');
    });

    var data = {};

    app.get('/data', function (req, res) {
        spotifyApi.searchTracks(req.query.search)
            .then(function (data) {
                res.json(data.body.tracks.items);
            }, function (err) {
                console.error(err);
            });
    });
};
