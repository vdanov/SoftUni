function solve(array) {
    let sorted = [];
    array.sort((a,b) => a-b);
    while (array.length > 0) {
        sorted.push(array.shift());
        sorted.push(array.pop());
    } 
    return sorted;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));