var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-4');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/api/search/:searchTerm', function(req, res) {
	request({
		url:"https://trailapi-trailapi.p.mashape.com/",
		headers: {
            'X-Mashape-Authorization': process.env.TRAIL_API_KEY
        },
        params: {
          'q[city_cont]': req.params.searchTerm
          
        }

	}, function(err, response, body) {
		res.json(JSON.parse(body))
	})

})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);

// $scope.search = function() {
//       var req = {
//         url: "https://trailapi-trailapi.p.mashape.com/",
//         method: 'GET',
//          headers: {
//             'X-Mashape-Authorization': ''
//         },
//         params: {
//           'q[city_cont]': $scope.searchTerm
          
//         }
//       }

//       $http(req).then(function success(res) {
//         $scope.hikes = res.data.places;
//         console.log($scope.hikes);
//       }, function error(res) {
//         console.log(res);
//       });