(function () {
    Array.prototype.last = function () { return this[this.length - 1] };
    Array.prototype.skip = function (n) { return this.slice(n); };
    Array.prototype.take = function (n) { return this.splice(0, n); };
    Array.prototype.sum = function () { return this.reduce((sum, el) => sum + el); };
    Array.prototype.average = function () { return this.sum() / this.length };
})();

let array = [1, 2, 3, 4, 5];

console.log(array.last());
console.log(array.skip(4));
console.log(array.take(4));
console.log(array.sum());
console.log(array.average());