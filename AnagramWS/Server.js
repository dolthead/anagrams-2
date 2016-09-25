/* https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm */

var express = require('express');
var app = express();
var dictionary = require('./createdictionary');
var dictonaryArray = dictionary();
/* https://www.npmjs.com/package/permutation */
var permutations = require('permutation');
var compare = require('./compareArrays');
var compareArray = compare();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/jquery-3.1.1.min.js', function (req, res) {
   res.sendFile( __dirname + "/" + "jquery-3.1.1.min.js");
})
app.get('/anagram/:user_input', function (req, res) {
   // Prepare output in JSON format
   var userInputPerm = permutations(user_input);
   var response = compareArray(userInputPerm, dictonaryArray)
  //  response = {
   //
  //     user_input:req.params.user_input,
  //  };
   console.log(JSON.stringify(response));
   res.status(200).json(response);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
