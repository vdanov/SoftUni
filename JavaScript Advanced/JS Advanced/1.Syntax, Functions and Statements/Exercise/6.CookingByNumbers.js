function solve(n, p1, p2, p3, p4, p5) {
    let chop = (n) => n / 2;
    let dice = (n) => Math.sqrt(n);
    let spice = (n) => n + 1;
    let bake = (n) => n * 3;
    let fillet = (n) => n * 0.8;

    let array = [p1, p2, p3, p4, p5];

    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case 'chop': n = chop(n); break;
            case 'dice': n = dice(n); break;
            case 'spice': n = spice(n); break;
            case 'bake': n = bake(n); break;
            case 'fillet': n = fillet(n).toFixed(1); break;
        }
        console.log(n);
    }
}