function solve(data) {
    for (let index = 0; index < data.length - 1; index += 2) {
        foodInfo[data[index]] = Number(data[index + 1]);
    }
    console.log(foodInfo);
}
solve(['Yoghurt', '40', 'Banana', '50', 'Apple', '32'])