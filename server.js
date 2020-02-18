const express = require('express');
const nunjucks = require('nunjucks');
const cartoon = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', function(req, res) {
  return res.render('index', { items: cartoon });
});

server.listen(1000, function() {
  console.log('server is runing!');
});
