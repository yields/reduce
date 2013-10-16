
describe('reduce', function(){

  var assert = require('assert')
    , reduce = require('reduce');

  it('object', function(){
    assert(3 == reduce({ a: 1, b: 2 }, sum, 0));
    function sum(n, k, v){
      return n += v;
    }
  })

  it('array', function(){
    assert(3 == reduce([1, 2], sum, 0));
    function sum(n, v){
      return n += v;
    }
  })

  it('string', function(){
    assert(198 == reduce('abc', sum, 0));
    function sum(n, v){
      return n += v
        .toUpperCase()
        .charCodeAt(0);
    }
  })

})
