function solve(array, step) {
    let result = [];
    let count = step;
    let i = 0;

    for (let index = 0; index < array.length; index += step) {
       result.push(array[index])
    }
    return result;
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'], 2))