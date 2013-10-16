
describe('reduce', function(){

  var assert = require('assert')
    , reduce = require('reduce');

  it('object', function(){
    assert(3 == reduce({ a: 1, b: 2 }, add, 0));
    function add(n, k, v){
      return n += v;
    }
  })

  it('array', function(){
    assert(3 == reduce([1, 2], add, 0));
    function add(n, v){
      return n += v;
    }
  })

  it('string', function(){
    assert(198 == reduce('abc', add, 0));
    function add(n, v){
      return n += v
        .toUpperCase()
        .charCodeAt(0);
    }
  })

})
