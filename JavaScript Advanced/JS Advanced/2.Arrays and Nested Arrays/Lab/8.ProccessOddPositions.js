function solve(array) {
   return array.filter((element, index) => index % 2 !== 0)
   .map(x=> x * 2)
   .reverse();
}