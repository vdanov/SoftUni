function solve(num) {
    let numLength = num.toString().length;
    let numToString = num.toString();
    let IsSame = true;
    let sum = 0;

    for (let index = 0; index < numLength; index++) {
        let current = numToString[index];
        sum += Number(current);
    }

    for (let index = 0; index < numLength-1; index++) {
        let current = numToString[index];
        let next = numToString[index + 1];

        if (current !== next) {
            IsSame = false;
        }
    }
    console.log(IsSame)
    console.log(sum)
}