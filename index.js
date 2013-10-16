
/**
 * dependencies
 */

var each = require('each');

/**
 * Export `reduce`
 */

module.exports = reduce;

/**
 * Reduce `obj` with `fn`.
 *
 * @param {Mixed} obj
 * @param {Function} fn
 * @param {Mixed} val
 * @api public
 */

function reduce(obj, fn, val){
  each(obj, function(a, b){
    val = fn.apply(null, [val, a, b]);
  });
  return val;
}
