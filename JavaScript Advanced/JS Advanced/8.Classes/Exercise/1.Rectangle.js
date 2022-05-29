class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color.replace(color[0], color[0].toUpperCase());
        
    }

    calcArea = function () {
        return this.width * this.height;
    }
}