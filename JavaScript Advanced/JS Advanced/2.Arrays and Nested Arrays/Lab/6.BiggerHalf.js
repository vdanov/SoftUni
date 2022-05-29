function solve(array) {
    array.sort((a, b) => a - b);
    let half = array.slice(Math.floor(array.length / 2));
    return half;
}
solve([3, 19, 14, 7, 2, 19, 6]);