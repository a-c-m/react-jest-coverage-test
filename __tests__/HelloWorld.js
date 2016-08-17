jest.unmock('../HelloWorld.js');

import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  describe('#test', () => {
    it('should return "Hello World"', () => {
      expect(HelloWorld.test()).toEqual('Hello World');
    })
  })
})
