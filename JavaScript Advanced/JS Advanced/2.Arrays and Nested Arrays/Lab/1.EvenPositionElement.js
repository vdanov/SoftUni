function solve(arr) {
    return arr.filter((element, index) => index % 2 === 0).join(' ');    
}
console.log(solve(['20', '30', '40', '50', '60']));