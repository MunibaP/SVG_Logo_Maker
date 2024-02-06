// Importing Triangle, Circle, and Square classes from ./shapes.js
const {Triangle, Circle, Square} = require("./shapes");

// Test for Triangle shape
describe("Triangle", () => {
    test("Render Successfully", () => {
        const shape = new Triangle();
        const color = "pink";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}" />`);
        // expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}" />`);
    });
});

// Test for Circle Shape
describe("Circle", () => {
    test("Render Successfully", () => {
        const shape = new Circle();
        const color = "yellow";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}" />`);
        // expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`);
    });
});

// Test for Square Shape
describe("Square", () => {
    test("Render Successfully", () => {
        const shape = new Square();
        const color = "green";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="0" height="200" width="200" fill="${color}" />`);
        // expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />`);
    });
});