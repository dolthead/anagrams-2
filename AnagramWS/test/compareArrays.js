var dictionary = require('./createdictionary');
var dictonaryArray = dictionary();
/* https://www.npmjs.com/package/permutation */
var permutations = require('permutation');
var compare = require('./compareArrays');




function compareArray(perms, dic){
  var matchArray = [];
console.log(perms.length);
console.log(dic.length);
  for (var i = 0; i < perms.length; i++) {
      console.log(perms[i]);
    if (dic.indexOf(perms[i].toUpperCase()) !== -1) {

      matchArray.push(dic[i]);
    }
  }
  return matchArray;
}

module.exports = compareArray;
var userInputPerm = permutations("ant");
var response = compareArray(userInputPerm, dictonaryArray);
console.log(response);
