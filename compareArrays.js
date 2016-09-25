
function compareArray(perms, dic){
  var matchArray = [];

  for (var i = 0; i < perms.length; i++) {
    if (dic.indexOf(perms[i]) !== -1) {
      matchArray.push(perms[i]);
    }
  }
  return matchArray;
}

module.exports = compareArray;
