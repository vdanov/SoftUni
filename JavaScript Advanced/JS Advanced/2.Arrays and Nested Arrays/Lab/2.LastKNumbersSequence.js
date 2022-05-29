function solve(n, k) {
    let array = [1];

    for (let index = 0; index < n - 1; index++) {
        let current = 0;
        for (let z = 0; z < k; z++) {
            if (index - z >= 0) {
                current += array[index - z];
            }
        }
        array[index + 1] = current;

    }
    return array;
}