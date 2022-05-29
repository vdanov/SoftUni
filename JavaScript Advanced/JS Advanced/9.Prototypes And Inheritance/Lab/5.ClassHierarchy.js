function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get() {
            return this.area;
        }

        changeUnits = function (units) {
            this.units = units;
        }

        toString = function () {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
            
            switch (units) {
                case 'mm':
                    this.radius *= 10;
                    break;
                case 'cm':
                    this.radius *= 100;
                    break;
                case 'm':
                    this.radius *= 1000;
            }

            this.area = this.radius ** 2 * Math.PI;
        }

        get() {
            return this.area;
        }

        toString = function () { return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}` }

        changeUnits = function (units) {
            switch (this.units) {
                case 'cm':
                    if (units == 'mm') {
                        this.radius *= 10;
                    } else if (units == 'm') {
                        this.radius /= 10;
                    }
                    break;
                case 'mm':
                    if (units == 'cm') {
                        this.radius /= 100;
                    } else if (units == 'm') {
                        this.radius /= 1000;
                    }
                    break;
                case 'm':
                    if (units == 'mm') {
                        this.radius /= 1000;
                    } else if (units == 'cm') {
                        this.radius /= 100;
                    }
            }
            this.units = units
            this.area = this.radius ** 2 * Math.PI;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
            switch (units) {
                case 'mm':
                    this.width *= 10;
                    this.height *= 10;
                    break;
                case 'cm':
                    this.width *= 100;
                    this.height *= 100;
                    break;
                    case 'm':
                        this.width *= 1000;
                        this.height *= 1000;
                    }
                    this.area = this.height * this.width;
                }
        get() {
            return this.area;
        }

        toString = function () {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
        changeUnits = function (units) {
            switch (this.units) {
                case 'cm':
                    if (units == 'mm') {
                        this.width *= 10;
                        this.height *= 10;
                    } else if (units == 'm') {
                        this.width /= 10;
                        this.height /= 10;
                    }
                    break;
                case 'mm':
                    if (units == 'cm') {
                        this.width /= 10;
                        this.height /= 10;
                    } else if (units == 'm') {
                        this.width /= 1000;
                        this.height /= 1000;
                    }
                    break;
                case 'm':
                    if (units == 'mm') {
                        this.width /= 1000;
                        this.height /= 1000;
                    } else if (units == 'cm') {
                        this.width /= 100;
                        this.height /= 100;
                    }
            }
            this.units = units
            return this.area = this.height * this.width;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
solve();