function solve(num, num1, str) {
    let result;

    switch (str) {
        case '+': result = num + num1; break;
        case '-': result = num - num1; break;
        case '*': result = num * num1; break;
        case '/': result = num / num1; break;
        case '**': result = num ** num1; break;
        case '%': result = num % num1; break;
    }
    console.log(result)
}