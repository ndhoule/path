'use strict';

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;
/**
 * Split reference.
 */

var split = String.prototype.split;

/**
 * Given a series of paths, look up a property on a potentially nested object.
 *
 * @name locate
 * @api private
 * @param {String[]} paths
 * @param {Object} obj
 * @return {*} The property if found; otherwise `undefined`.
 * @example
 * var person = {
 *   name: 'Bob Loblaw',
 *   address: {
 *     coordinates: {
 *       x: 10,
 *       y: 20
 *     }
 *   }
 * };
 *
 * locate(['address', 'coordinates', 'x'], person);
 * //=> 10
 */

var locate = function locate(paths, obj) {
  var val = obj;

  for (var i = 0; i < paths.length; i += 1) {
    if (!has.call(val, paths[i])) {
      return undefined;
    }
    val = val[paths[i]];
  }

  return val;
};

/**
 * Find a path on an object given a separator.
 *
 * @name pathOn
 * @api public
 * @param {string} separator
 * @param {string} str
 * @param {object} obj
 * @return {undefined}
 * @example
 * var person = {
 *   name: 'Bob Loblaw',
 *   address: {
 *     coordinates: {
 *       x: 10,
 *       y: 20
 *     }
 *   }
 * };
 *
 * pathOn('/', 'address/coordinates/x', person);
 * //=> 10
 */

var pathOn = function pathOn(separator, str, obj) {
  return locate(split.call(str, separator), obj);
};

/**
 * Retrieve up a property on an object located at a given path.
 *
 * @name path
 * @api public
 * @param {string} str The dot-delimited path to search for.
 * @param {Object} obj The object to search.
 * @return {*} The property if found; otherwise `undefined`.
 * @example
 * var person = {
 *   name: 'Bob Loblaw',
 *   address: {
 *     coordinates: {
 *       x: 10,
 *       y: 20
 *     }
 *   }
 * };
 *
 * path('address.coordinates.y', person);
 * //=> 20
 */

var path = function path(str, obj) {
  return pathOn('.', str, obj);
};

/**
 * Exports.
 */

module.exports = path;
module.exports.on = pathOn;
