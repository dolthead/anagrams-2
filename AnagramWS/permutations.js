//https://github.com/miguelmota/permutations/blob/master/permutations.js

function uniqueFilter(value, index, self) {
     return self.indexOf(value) === index;
 }

function unique(a) {
    return a.filter(uniqueFilter);
  }

  function permutations(value, opts) {
    //if no vlaue return nothing
    if (!value) return [];
    opts = opts || {};
    //
    function p(prefix, s, acc) {
      acc = acc || [];
      var n = s.length;
      if (n === 0) return acc.push(prefix);
      for (var i = 0; i < n; i++) {
        p(prefix + s.charAt(i), s.substring(0,i) + s.substring(i+1), acc);
      }
      return opts.unique ? unique(acc) : acc;
    }

    return p('', value);
  }

module.exports = permutations();
console.log(permutations('ant'));
