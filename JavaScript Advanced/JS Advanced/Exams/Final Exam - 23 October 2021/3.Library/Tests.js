let expect = require('chai').expect;
let library = require('./library');

describe("Library", function () {
    describe("calcPriceOfBook", function () {
        it('property is present', () => {
            expect(library).to.have.own.property('calcPriceOfBook');
        });

        it("Valid parameters and year below 1980's", () => {
            expect(library.calcPriceOfBook('Harry Potter', 1975)).to.equals('Price of Harry Potter is 10.00');
        });

        it("Valid parameters and year below 1980's", () => {
            expect(library.calcPriceOfBook('Harry Potter', 1980)).to.equals('Price of Harry Potter is 10.00');
        });

        it("Valid parameters and year above 1980's", () => {
            expect(library.calcPriceOfBook('Harry Potter', 2005)).to.equals('Price of Harry Potter is 20.00');
        });

        it('invalid parameters', () => {
            expect(() => library.calcPriceOfBook(1, 2005)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Harry Potter', '2005')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(1, '2005')).to.throw(Error, 'Invalid input');
        });
    });

    describe('findBook', () => {
        it('property is present', () => {
            expect(library).to.have.own.property('findBook');
        });

        it('empty collection', () => {
            let collection = [];
            expect(() => library.findBook(collection, 'Harry Potter')).to.throw(Error, 'No books currently available');
        });

        it('returning correct element in collection', () => {
            let collection = ['Harry Potter'];
            expect(library.findBook(collection, 'Harry Potter')).to.equals('We found the book you want.');
        });

        it('element in collection not found', () => {
            let collection = ['Harry Potter'];
            expect(library.findBook(collection, 'Lord of the rings')).to.equals('The book you are looking for is not here!');
        });
    })

    describe('arrangeTheBooks', () => {
        it('property is present', () => {
            expect(library).to.have.own.property('arrangeTheBooks');
        });

        it('invalid input', () => {
            expect(() => library.arrangeTheBooks('5')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks({ a: 'b' })).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(new Map())).to.throw(Error, 'Invalid input');
        })

        it('not enough space', () => {
            let booksCount = 50;

            expect(library.arrangeTheBooks(booksCount)).to.equals('Insufficient space, more shelves need to be purchased.');
        });

        it('working as expected', () => {
            let booksCount = 10;

            expect(library.arrangeTheBooks(booksCount)).to.equals('Great job, the books are arranged.');
        });

        it('shelves and books are equal', () => {
            let booksCount = 40;

            expect(library.arrangeTheBooks(booksCount)).to.equals('Great job, the books are arranged.');
        });
    });
});