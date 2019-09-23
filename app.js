const express = require('express');
const path = require('path');

const app = express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname + '/dist/finalproject'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/finalproject/index.html'));
});

app.listen(process.env.PORT || 9090);