function solve(array) {
    let sum = 0;
    let inverseSum = 0;
    let conc = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;
        inverseSum += (1/element);
        let str = String(element);
        conc += element
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(conc);
}