const { Circle, Square, Triangle } = require("./shapes");

// Circle method tests
test("Circle set color method test", () => {
  const circle = new Circle();
  circle.setTextColor("red");
  expect(circle.textColor).toEqual("red");
});

test("Circle set color method test", () => {
  const circle = new Circle();
  circle.setShapeColor("blue");
  expect(circle.shapeColor).toEqual("blue");
});

test("Circle set color method test", () => {
  const circle = new Circle();
  circle.setTextType("ABC");
  expect(circle.text).toEqual("ABC");
});

// Circle render shape test
test("Circle render shape", () => {
  const circle = new Circle("red", "ABC", "violet");
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="violet">ABC</text> </svg>`;

  expect(circle.render()).toEqual(svg);
});

// Square method tests
test("Square set color method test", () => {
  const square = new Square();
  square.setTextColor("red");
  expect(square.textColor).toEqual("red");
});

test("Square set color method test", () => {
  const square = new Square();
  square.setShapeColor("blue");
  expect(square.shapeColor).toEqual("blue");
});

test("Square set color method test", () => {
  const square = new Square();
  square.setTextType("ABC");
  expect(square.text).toEqual("ABC");
});

// Square render shape test
test("Square render shape", () => {
  const square = new Square("green", "ABC", "white");
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="50" width="200" height="200" fill="green" /> <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">ABC</text> </svg>`;

  expect(square.render()).toEqual(svg);
});

// Triangle method tests
test("Triangle set color method test", () => {
  const triangle = new Triangle();
  triangle.setTextColor("red");
  expect(triangle.textColor).toEqual("red");
});

test("Triangle set color method test", () => {
  const triangle = new Triangle();
  triangle.setShapeColor("blue");
  expect(triangle.shapeColor).toEqual("blue");
});

test("Triangle set color method test", () => {
  const triangle = new Triangle();
  triangle.setTextType("ABC");
  expect(triangle.text).toEqual("ABC");
});

// Triangle render shape test
test("Triangle render shape", () => {
  const triangle = new Triangle("blue", "ABC", "black");
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,20 250,180 50, 180" fill="blue" /> <text x="150" y="155" font-size="50" text-anchor="middle" fill="black">ABC</text> </svg>`;

  expect(triangle.render()).toEqual(svg);
});
