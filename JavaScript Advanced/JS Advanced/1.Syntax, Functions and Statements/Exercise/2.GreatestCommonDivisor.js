function solve(num1, num2){
    let max = num1 > num2 ? num1 : num2;
    let divider = 0;

    for (let index = 0; index < max; index++) {
        if (num1 % index == 0 && num2 % index == 0) {
            divider = index;
        }        
    }
    return divider;
}