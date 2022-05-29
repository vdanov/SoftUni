function solve(n, m) {
    let result = 0;
    let a = Number(n);
    let b = Number(m);
    for (let i = a; i <= b; i++) {
        result += i;
    }

    console.log(result);
}