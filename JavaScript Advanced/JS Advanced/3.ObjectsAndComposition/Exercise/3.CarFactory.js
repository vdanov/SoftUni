function solve(car) {
    let engines = {
        ['Small engine']: { power: 90, volume: 1800 },
        ['Normal engine']: { power: 120, volume: 2400 },
        ['Monster engine']: { power: 200, volume: 3500 }
    };

    function selectEngine(power) {
        if (power < 120) {
            return engines["Small engine"]
        } else if (power >= 120 && power < 200) {
            return engines["Normal engine"];
        } else {
            return engines["Monster engine"];
        }
    }

    let carriages = {
        Hatchback: { type: 'hatchback', color: '<as required>' },
        Coupe: { type: 'coupe', color: '<as required>' }
    };

    function selectCarriage(type) {
        let color = car.color;
        if (car.carriage == 'hatchback') {
            carriages.Hatchback.color = color;
            return carriages.Hatchback;
        } else {
            carriages.Coupe.color = color;
            return carriages.Coupe;
        }
    }

    function wheelSize(size) {
        if (size % 2 == 0) {
            return [size - 1,size - 1,size - 1,size - 1]
        }
        return [size,size,size,size];
    }

    return bespoke = {
        model: car.model,
        engine: selectEngine(car.power),
        carriage: selectCarriage(car.carriage),
        wheels: wheelSize(car.wheelsize)
    };
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));