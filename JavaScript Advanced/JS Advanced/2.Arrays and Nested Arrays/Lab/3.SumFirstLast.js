function solve(array) {
    let first = Number(array[0]);
    let last = Number(array[array.length-1]);
    let total = first + last;
    return total;
}
console.log(solve([10, 20, 30, 40,50]));