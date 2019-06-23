import { expect } from 'chai';
import { Greeter } from '../src';

// tslint:disable only-arrow-functions

describe(`Test`, function () {
  it(`greet`, function () {
    const greeter = new Greeter();
    expect(greeter.greet()).to.equal('Hello World');
  });
});
