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
  if (obj == null) {
    return undefined;
  }

  var val = obj;

  for (var i = 0; i < paths.length; i += 1) {
    if (val == null || !has.call(val, paths[i])) {
      return undefined;
    }
    val = val == null ? val : val[paths[i]];
  }

  return val;
};

/**
 * Find a path on an object given a separator.
 *
 * @name retrieveOn
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
 * retrieveOn('/', 'address/coordinates/x', person);
 * //=> 10
 */

var retrieveOn = function retrieveOn(separator, str, obj) {
  return locate(split.call(str, separator), obj);
};

/**
 * Retrieve up a property on an object located at a given path.
 *
 * @name retrieve
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
 * retrieve('address.coordinates.y', person);
 * //=> 20
 */

var retrieve = function retrieve(str, obj) {
  return retrieveOn('.', str, obj);
};

/**
 * Exports.
 */

module.exports = retrieve;
module.exports.on = retrieveOn;
