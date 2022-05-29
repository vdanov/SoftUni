function solve(num){
    if (typeof(num) !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(num)}.`);
    } else{
        console.log((Math.pow(num, 2) * Math.PI).toFixed(2));
    }
}