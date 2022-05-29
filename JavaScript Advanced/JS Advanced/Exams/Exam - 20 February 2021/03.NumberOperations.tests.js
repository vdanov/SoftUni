let numberOperations = require("./03. Number Operations_Resources");
let expect = require("chai").expect;
let assert = require("chai").assert;

describe('Number operations', () => {
    describe('powNumber', () => {
        it('works as intended', () => {
            expect(numberOperations.powNumber(5)).to.equals(25);
            expect(numberOperations.powNumber(100)).to.equals(10000);
            expect(numberOperations.powNumber(-5)).to.equals(25);
            expect(numberOperations.powNumber(0)).to.equals(0);
        });
    });

    describe('numberChecker', () => {
        it('if parameter is NaN, throws error', () => {
            expect(() => numberOperations.numberChecker([1, 2, 3])).to.throw(Error);
            expect(() => numberOperations.numberChecker('this is NaN')).to.throw(Error);
            expect(() => numberOperations.numberChecker({})).to.throw(Error);
        });

        it('param 1 is less than 100', () => {
            expect(numberOperations.numberChecker(99)).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equals('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equals('The number is lower than 100!');
        });

        it('param 1 is equal or more than 100', () => {
            expect(numberOperations.numberChecker(100)).to.equals('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equals('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', () => {
        let array1 = [1, 2, 3, 4, 5];
        let array2 = [1, 2, 3];

        it('first param is bigger working as intended', () => {
            assert(numberOperations.sumArrays(array1, array2), [2, 4, 6, 4, 5]);
        });

        arrray1 = [1, 2, 3];
        array2 = [1, 2, 3, 4, 5];
        it('second param is bigger working as intended', () => {
            assert(numberOperations.sumArrays(array1, array2), [2, 4, 6, 4, 5]);
        });

        array2 = [1, 2, 3, 4, 5];
        it('if arrays are equal', () => {
            assert(numberOperations.sumArrays(array1, array2), [2, 4, 6, 8, 10]);
        });
    });
});