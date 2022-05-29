let mathEnforcer = require('./4.MathEnforcer');
let expect = require('chai').expect;
let closeTo = require('chai').closeTo;

describe('Math enforcer', () => {
    describe('addFive', () => {
        it('wrong type argument', () => {
            expect(mathEnforcer.addFive('5')).to.undefined;
        })

        it('performs as expected', () => {
            expect(mathEnforcer.sum(2.5)).to.undefined;
        })

        it('performs as expected', () => {
            expect(mathEnforcer.sum(-2.5)).to.undefined;
        })

        it('performs as expected', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })

        it('negative number', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })

    describe('subtractTen', () => {
        it('wrong type argument', () => {
            expect(mathEnforcer.subtractTen('5')).to.undefined;
        })

        it('performs as expected', () => {
            expect(mathEnforcer.sum(20.5)).to.undefined;
        })

        it('performs as expected', () => {
            expect(mathEnforcer.sum(-20.5)).to.undefined;
        })

        it('performs as expected', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        })

        it('negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
    })

    describe('sum', () => {
        it('wrong argument 1', () => {
            expect(mathEnforcer.sum('a', 1)).to.undefined;
        })

        it('wrong argument 2', () => {
            expect(mathEnforcer.sum(1, 'a')).to.undefined;
        })

        it('wrong both arguments', () => {
            expect(mathEnforcer.sum('a', 'a')).to.undefined;
        })
        //.closeTo(expected, delta[, msg])
        it('performs as expected', () => {
            expect(mathEnforcer.sum(2.5, 2.5)).to.be.closeTo(5, 0.01);
        })
        // => testing floating points
        it('performs as expected with negative args', () => {
            expect(mathEnforcer.sum(-2.5, -2.5)).to.be.closeTo(-5, 0.01);
        })

        it('argument 1 is negative', () => {
            expect(mathEnforcer.sum(-2.5, 2.5)).to.be.closeTo(0, 0.01);
        })

        it('argument 2 is negative', () => {
            expect(mathEnforcer.sum(2.5, -2.5)).to.be.closeTo(0, 0.01);
        }) 
    })
})