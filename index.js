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






app.listen(3000);