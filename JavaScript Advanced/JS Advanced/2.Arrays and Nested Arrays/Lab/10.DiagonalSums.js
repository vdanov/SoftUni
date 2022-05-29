function solve(matrix) {
    let primary = 0;
    let secondary = 0;
    let col = 0;

    for (let row = 0; row < matrix.length; row++) {
        primary += matrix[row][col];
        col++;
    }

    col = matrix.length-1;

    for (let index = 0; index < matrix.length; index++) {
        secondary += matrix[col][index]
        col--;
    }

    console.log(primary.toString() + ' ' + secondary.toString());
}
solve([[20, 40],
[10, 60]]
)