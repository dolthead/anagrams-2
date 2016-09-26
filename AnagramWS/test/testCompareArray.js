
\\testing
var expect = require('chai').expect;
var compare = require('compareArrays');
var arrayPerms = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba']
var arrayDic = ['ABC', 'ANT', 'APT', 'WHAT', 'NOPE', 'CAB', 'COOL', 'ABD', 'TEST']
describe('testing if anagrams resolve from a comapre of the dictionary and permutation array, value "test"', function () {

  //console.log(userInputPerm);
  var response = compare(arrayPerm, arrayDic);
 it('should return ["test","tets","stet","sett"]', function (done) {
   expect(arrayDic).to.have.lengthOf(9)
   expect(arrayPerms).to.have.lengthOf(6)
   expect(response).to.eql(['abc','cab'])
   done();
 });
});
