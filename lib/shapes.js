// Shape class uses constructor to define shapes
class Shape {
    constructor() {
        this.color = "";
    }
    // shape class to set the function setColor
    setColor(color) {
        this.color = color;
    }
}

// Defining a Triangle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    // return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
    }
}

// Defining a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
        // return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
    }
}

// Defining a Square class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Square extends Shape {
    render() {
        return `<rect x="50" y="0" height="200" width="200" fill="${this.color}" />`;
        // return `<rect x="50" height="200" width="200" fill="${this.color}">`;
    }
};

// Export the shape classes
module.exports = {Triangle, Circle, Square};