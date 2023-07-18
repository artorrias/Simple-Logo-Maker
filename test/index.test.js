const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');
const Triangle = require('../lib/triangle.js');

describe('Circle', () => {
    describe('render', () => {
        it('should return a string with file info correct to input', () => {
            const expected = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="100" r="100" fill="red" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">blu</text>

</svg>`
            const shape = new Circle ("red", "white", "blu");
            expect(shape.render()).toEqual(expected);
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should return a string with file info correct to input', () => {
            const shape = new Circle();
            shape.setColor("blue");
            const expected = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="100" r="100" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`
            expect(shape.render()).toEqual(expected);
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should return a string with file info correct to input', () => {
            const expected = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="black" />

<text x="150" y="100" font-size="60" text-anchor="middle" fill="red">hru</text>

</svg>`
            const shape = new Square ("black", "red", "hru");
            expect(shape.render()).toEqual(expected);
        });
    });
});

describe('Square', () => {
    describe('render', () => {

        it('should return a string with file info correct to input', () => {
            const shape = new Square();
            shape.setColor("blue");
            const expected = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="blue" />

<text x="150" y="100" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`
            expect(shape.render()).toEqual(expected);
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should return a string with file info correct to input', () => {
            const expected = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="0 50, 150 200, 300 50" style="fill:gray;stroke:gray;stroke-width:1" />

<text x="150" y="100" font-size="60" text-anchor="middle" fill="black">pro</text>

</svg>`
            const shape = new Triangle ("gray", "black", "pro");
            expect(shape.render()).toEqual(expected);
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should return a string with file info correct to input', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            const expected = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="0 50, 150 200, 300 50" style="fill:blue;stroke:blue;stroke-width:1" />

<text x="150" y="100" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`
            expect(shape.render()).toEqual(expected);
        });
    });
});