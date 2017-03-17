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
  app.get('/isgoodword', function(req, res) {
    User.find({}, function(err, docs) {
      if(err) console.error(err);
      res.json(docs);
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
