function solve(input) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let row = 0;
    let col = 0;
    let index = 0;
    let moves = 0;
    let dueChangePlayer = false;
    let isWinning = false;
    let player = 'X';

    for (let index = 0; index < input.length; index++) {
        if (moves == 9) {
            break;
        }
        
        (row) = input[index].split(' ')[0];
        (col) = input[index].split(' ')[1];
        row = Number(row);
        col = Number(col);

        if (dueChangePlayer) {
            player = player == 'X' ? 'O' : 'X';
            dueChangePlayer = false;
        }

        if (board[row][col] == 'X' || board[row][col] == 'O') {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        board[row][col] = player;

        if (board[0][0] == player && board[0][1] == player && board[0][2] == player) {
            isWinning = true;
        }

        if (board[0][1] == player && board[1][1] == player && board[2][1] == player) {
            isWinning = true;
        }

        if (board[0][2] == player && board[1][2] == player && board[2][2] == player) {
            isWinning = true;
        }

        if (board[0][0] == player && board[1][0] == player && board[2][0] == player) {
            isWinning = true;
        }

        if (board[1][0] == player && board[1][1] == player && board[2][1] == player) {
            isWinning = true;
        }

        if (board[2][0] == player && board[2][1] == player && board[2][2] == player) {
            isWinning = true;
        }

        // diagonals
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
            isWinning = true;
        }

        if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
            isWinning = true;
        }

        if (isWinning) {
            console.log(`Player ${player} wins!`);
            for (let index = 0; index < board.length; index++) {
                console.log(board[index].join('	'));
            }
            return;
        }

        moves++;
        dueChangePlayer = true;
    }

    console.log('The game ended! Nobody wins :(');
    for (let index = 0; index < board.length; index++) {
        console.log(board[index].join('	'));
    }
}
solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);