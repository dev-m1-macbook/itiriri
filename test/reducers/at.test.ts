import { expect } from 'chai';
import { at } from '../../lib/reducers/at';

describe('reducers/at', () => {
  describe('When accessing an element that exists', () => {
    it('Should return the element', () => {
      const source = [1, 2, 3, 4, 5];
      expect(at(source, 0)).to.be.deep.equal(1);
    });

    it('Should return the element', () => {
      const source = [1, 2, 3, 4, 5];
      expect(at(source, 1)).to.be.deep.equal(2);
    });

    it('Should return the element', () => {
      const source = [1, 2, 3, 4, 5];
      expect(at(source, 2)).to.be.deep.equal(3);
    });
  });

  describe('When accessing an element that does not exist', () => {
    it('Should return undefined', () => {
      const source = [1, 2];
      expect(at(source, 100)).to.be.undefined;
    });
  });
});
