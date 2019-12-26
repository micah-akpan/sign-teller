const assert = require('assert');
const tellSign = require('../lib/tell-sign');

describe('Library Main', () => {
  describe('tellSign', () => {
    it('should return the right zodiac sign when given date', () => {
      const sign = tellSign({ month: 12, day: 24 });
      assert.equal(sign.sign, 'Sagittarius');
    });

    it('should return the right zodiac sign when given date', () => {
      const sign = tellSign({ month: 7, day: 10, year: 1900 });
      assert.equal(sign.sign, 'Gemini');
    });

    it('should return the right zodiac sign when given date', () => {
      const sign = tellSign({ month: 8, day: 16, year: 1900 });
      assert.equal(sign.sign, 'Leo');
    });

    it('should return the right zodiac sign when given a zodiac type', () => {
      const sign = tellSign({ month: 5, day: 22, year: 1900 }, 'tropical');
      assert.equal(sign.sign, 'Gemini');
    });
  })
})
