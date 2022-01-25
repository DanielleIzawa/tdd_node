const { describe, it } = require('mocha');
/* const assert = require('../src/core/assert/assert.js');  */
const assert = require('assert');
const sqr = require('../src/core/sqr/sqr.js');
/* var User = require('../src/core/user/user.js'); */

describe('Testing of types and values', () => {
  it('Testing string', () => {
    assert('Pessoa' === 'Pessoa', 'Testing string');
  });

  it('Testing sqr', () => {
    assert(sqr(3) === 9)
  });

  it('Testing sqr 2', () => {
    assert(sqr(5) === 25)
  });

  it('Testing double', () => {
    assert(0.0 === 0.0)
  });
/* 
  it('Testing double', () => {
    assert(0.0 === 1.0)
  }); */
});

/* function main() {
  assert('Pessoa' === 'Pessoa', 'Testing string');

  assert(sqr(3) === 9, 'Testing sqr');

  var admin = new User('admin', '123456');
  assert(!admin.auth('admi', '123456'), 'Testing invalid credentials auth');

  assert(admin.auth('admin', '123456'), 'Testing credentials auth');


}

main(); */