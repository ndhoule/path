/* global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var path = require('../');

describe('path', function() {
  var person;

  beforeEach(function() {
    person = {
      name: 'Bob Loblaw',
      age: 50,
      address: {
        street: '123 Law Street',
        city: 'Irvine',
        zip: 555555,
        coordinates: {
          x: 10,
          y: 20
        }
      },
      phone: '555-555-5555'
    };
  });

  it('should be a function', function() {
    assert.equal(typeof path, 'function');
  });

  it('should have an arity of 2', function() {
    assert.equal(path.length, 2);
  });

  it('should retrieve a root-level property from an object', function() {
    assert.equal(path('age', person), person.age);
  });

  it('should retrieve a nested property from an object', function() {
    assert.equal(path('address.coordinates.y', person), person.address.coordinates.y);
  });

  it('should return `undefined` when no property is found', function() {
    assert.equal(typeof path('nonexistent', person), 'undefined');
  });

  it('should return `undefined` when a nested property is not found', function() {
    assert.equal(typeof path('non.exist.ent', person), 'undefined');
  });
});

describe('path.on', function() {
  var person;

  beforeEach(function() {
    person = {
      name: 'Bob Loblaw',
      age: 50,
      address: {
        street: '123 Law Street',
        city: 'Irvine',
        zip: 555555,
        coordinates: {
          x: 10,
          y: 20
        }
      },
      phone: '555-555-5555'
    };
  });

  it('should be a function', function() {
    assert.equal(typeof path.on, 'function');
  });

  it('should have an arity of 3', function() {
    assert.equal(path.on.length, 3);
  });

  it('should retrieve a root-level property from an object', function() {
    assert.equal(path.on('/', 'age', person), person.age);
  });

  it('should retrieve a nested property from an object', function() {
    assert.equal(path.on('/', 'address/coordinates/y', person), person.address.coordinates.y);
  });

  it('should return `undefined` when no property is found', function() {
    assert.equal(typeof path.on('/', 'nonexistent', person), 'undefined');
  });

  it('should return `undefined` when a nested property is not found', function() {
    assert.equal(typeof path.on('/', 'non/exist/ent', person), 'undefined');
  });
});
