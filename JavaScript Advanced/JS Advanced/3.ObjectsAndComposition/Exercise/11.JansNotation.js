function solve(input) {
    let number = Number.MIN_SAFE_INTEGER;
    let operator = '';

    let array = [];

    for (let index = 0; index < input.length; index++) {
        const element = input[index];

        isNaN(element) ? operator = element : array.push(element);

        if (operator != '') {

            if (array.length <= 1) {
                console.log("Error: not enough operands!");
                return;
            }

            let result = 0;
            let right = array.pop();
            let left = array.pop();

            switch (operator) {
                case '+':
                    result = left + right;
                    array.push(result);
                    break;
                case '-':
                    result = left - right;
                    array.push(result);
                    break;
                case '*':
                    result = left * right;
                    array.push(result);
                    break;
                case '/':
                    result = left / right;
                    array.push(result);
                    break;
                default:
                    break;
            }
            operator = '';
        }
    }
    if (array.length == 1) {
        console.log(array[0]);
    } else {
        console.log("Error: too many operands!");
    }
}
solve([15,
    '/']
);