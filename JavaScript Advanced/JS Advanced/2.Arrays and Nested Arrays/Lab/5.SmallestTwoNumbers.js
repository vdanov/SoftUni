function solve(array) {
    array.sort((a,b) => a-b);
    let a = array[0];
    let b = array[1];
    console.log(a + ' ' + b);
}
solve([5,3,6,10,34])