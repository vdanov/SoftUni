function solve(steps, footprint, speed){
    let breakMins = Math.trunc((steps * footprint) / 500);
    let distance = (steps * footprint) / 1000;
    let time = (distance / speed) * 60;
    console.log(`${(time + breakMins).toFixed(2)}`);
}
solve(2564, 0.70, 5.5);