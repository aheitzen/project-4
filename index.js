var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var app = express();
var User = require('./models/user.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/project-4');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

var secret = "mysecret";

app.use('/api/hikes', expressJWT({secret: secret})); 
app.use('/api/users', expressJWT({secret: secret})
.unless({path: ['/api/users'], method: 'POST'}));

app.use('/api/hikes', require('./controllers/hikes.js'));
app.use('/api/users', require('./controllers/users.js'))



app.get('/api/search/:searchTerm', function(req, res) {
	request({
		url:"https://trailapi-trailapi.p.mashape.com/",
		headers: {
            'X-Mashape-Authorization': process.env.TRAIL_API_KEY
        },
        qs: {
          'q[city_cont]': req.params.searchTerm
          
        }

	}, function(err, response, body) {
		res.json(JSON.parse(body))
	})

})

app.post('/api/auth', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err || !user) return res.status(401).send({message: 'User not found'});
    user.authenticated(req.body.password, function(err, result) {
      if (err || !result) return res.status(401).send({message: 'User not authenticated'});

      var token = jwt.sign(user, secret);
      res.send({user: user, token: token});
    });
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000)

