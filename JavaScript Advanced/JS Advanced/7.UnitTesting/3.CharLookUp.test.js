const expect = require('chai').expect;
const should = require('chai').should();
const lookupChar = require('./3.CharLookUp');

describe('Testing main functionality', () => {
    let test = 'test';

    it('Assuring its working correctly', () => {
        expect(lookupChar('a', 0)).to.equal('a');
        expect(lookupChar(test, 0)).to.equal('t');
    });
    
    
    it('Index out of bounds', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
        expect(lookupChar(test, 100)).to.equal('Incorrect index');
        expect(lookupChar(test, -1)).to.equal('Incorrect index');
    });

    it('wrong arguments', () => {
        expect(lookupChar(test, 'as')).to.undefined;
        expect(lookupChar(1, 1)).to.undefined;
    });
})