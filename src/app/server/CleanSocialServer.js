/**
 * Created by ilya on 17/03/2017.
 */
var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var session = require('express-session');
var crypto = require('crypto');
var fs = require('fs');
var request = require('request');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + './../../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(session({
  secret: 'keyboard cat',
  user: '',
  maxAge: 3600000,
  saveUninitialized: true
}));

  // APIs
  // select all
  app.post('/isgoodword', function(req, res) {
    apiheaders = {
      'Authorization': '2524a832-c1c6-4894-9125-41a9ea84e013',
        'Content-Type': 'application/json'
    }
    text = 'text='+req.body['text']
    request({
      headers: apiheaders,
      url: 'http://api1.webpurify.com/services/rest/' +
      '?method=webpurify.live.replace&api_key=c2d6e0ef41c94572f0c6e39a272a899f&format=json&'+text,
      method: 'POST'
    }, function (err, response, body) {
      res.setHeader('Content-Type', 'application/json');
      res.json(JSON.parse(body));
    });
  });

  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'./../../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Angular 2 Full Stack listening on port '+app.get('port'));
  });


module.exports = app;
