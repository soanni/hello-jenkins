var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello Codenvy');
});
 
app.listen(process.env.PORT || 5001);
 
module.exports = app;
