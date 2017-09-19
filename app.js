const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');

app.use(function (req, res, next) {
  console.log(chalk.bold.red('You will always see me...'));
  next();
})

app.use('/special/', function(req, res, next) {
  console.log(chalk.yellow('You reached the special area'));
  next();
});

app.get('/special/', function(req, res) {
  res.send('<h1>This is it</h1>');
});

app.get('/', function(req, res, next) {
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.get('/news', function(req, res, next) {
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.get('/', function(req, res) {
  res.send('Welcome to Twitter!');
});

app.get('/news', function(req, res) {
  res.send('What has the world come to?');
});

app.listen(3000, function() {
  console.log('server listening');
});
