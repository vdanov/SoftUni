function solution(input) {
    let num = input;

    return (number) => {
        return num + number;
    };
}
let add5 = solution(5);
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));