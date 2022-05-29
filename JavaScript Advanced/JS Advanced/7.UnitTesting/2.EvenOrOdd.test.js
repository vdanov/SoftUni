let expect = require('chai').expect;
let isOddOrEven = require('./2.EvenOrOdd');

describe('3 main functionalities', () => {
    it('isString', () => {
        let expected = 'isString';
        expect(isOddOrEven(3)).to.undefined;
    });

    it('isOdd', () => {
        expect(isOddOrEven('s')).to.equal('odd')
    });

    it('isEven', () => {
        expect(isOddOrEven('ss')).to.equal('even')
    });
});