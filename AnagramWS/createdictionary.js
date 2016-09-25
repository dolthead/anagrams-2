

/**
* http://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
*
*/
function arrayDictionary() {
  var fs = require('fs');
  var file = fs.readFileSync("C:\\Users\\Jaws\\.atom\\projects\\Dictionary\\Dictionary.txt");
  //  if(err) throw err;
  var array = file.toString().split("\r\n");
  return array;
}

module.exports = arrayDictionary;
