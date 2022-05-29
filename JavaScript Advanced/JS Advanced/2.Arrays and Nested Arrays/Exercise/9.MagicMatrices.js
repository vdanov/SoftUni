function solve(matrix) {
    let sum = matrix[0].reduce((a,b) => a+b);
    
    console.log(sum);

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            sumCol += matrix[row][col];
            if (col == 0) {
                sumRow += matrix[row][col];
            }
        }
        arrayCols[row] = sumCol;
    }
}
console.log(solve([
    [1, 1, 1],
    [1, 2, 0],
    [0, 0, 3]
]));