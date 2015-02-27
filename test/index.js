/* global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var retrieve = require('../');

describe('retrieve', function() {
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
          y: 20,
          z: null
        }
      },
      phone: '555-555-5555'
    };
  });

  it('should be a function', function() {
    assert.equal(typeof retrieve, 'function');
  });

  it('should have an arity of 2', function() {
    assert.equal(retrieve.length, 2);
  });

  it('should retrieve a root-level property from an object', function() {
    assert.equal(retrieve('age', person), person.age);
  });

  it('should retrieve a nested property from an object', function() {
    assert.equal(retrieve('address.coordinates', person), person.address.coordinates);
    assert.equal(retrieve('address.coordinates.y', person), person.address.coordinates.y);
    assert.equal(retrieve('address.coordinates.z', person), person.address.coordinates.z);
  });

  it('should return `undefined` when no property is found', function() {
    assert.equal(typeof retrieve('nonexistent', person), 'undefined');
  });

  it('should return `undefined` when a nested property is not found', function() {
    assert.equal(typeof retrieve('non.exist.ent', person), 'undefined');
  });

  it('should work on null objects', function() {
    assert.equal(typeof retrieve('non.exist.ent', null), 'undefined');
    assert.equal(typeof retrieve('non.exist.ent', undefined), 'undefined');
  });

  it('should work on intermediary null paths', function() {
    var obj = {
      dat: {
        bad: undefined
      }
    };

    assert.equal(typeof retrieve('dat.bad.path', obj), 'undefined');
  });
});

describe('retrieve.on', function() {
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
    assert.equal(typeof retrieve.on, 'function');
  });

  it('should have an arity of 3', function() {
    assert.equal(retrieve.on.length, 3);
  });

  it('should retrieve a root-level property from an object', function() {
    assert.equal(retrieve.on('/', 'age', person), person.age);
  });

  it('should retrieve a nested property from an object', function() {
    assert.equal(retrieve.on('/', 'address/coordinates/y', person), person.address.coordinates.y);
  });

  it('should return `undefined` when no property is found', function() {
    assert.equal(typeof retrieve.on('/', 'nonexistent', person), 'undefined');
  });

  it('should return `undefined` when a nested property is not found', function() {
    assert.equal(typeof retrieve.on('/', 'non/exist/ent', person), 'undefined');
  });

  it('should work on null objects', function() {
    assert.equal(typeof retrieve.on('/', 'non/exist/ent', null), 'undefined');
    assert.equal(typeof retrieve.on('/', 'non/exist/ent', undefined), 'undefined');
  });

  it('should work on intermediary null paths', function() {
    var obj = {
      dat: {
        bad: undefined
      }
    };

    assert.equal(typeof retrieve('/', 'dat/bad/path', obj), 'undefined');
  });
});
