const { Circle, Square, Triangle } = require("./shapes");

// Circle render shape
test("Circle render shape", () => {
  const circle = new Circle("red", "ABC", "black");
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
        </svg>`;

  expect(circle.render()).toEqual(svg);
});

// Square render shape
test("Square render shape", () => {
  const square = new Square("green", "ABC", "black");
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         <rect x="50" y="50" width="200" height="200" fill="green" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">ABC</text>
        </svg>`;

  expect(square.render()).toEqual(svg);
});

// Triangle render shape
test("Triangle render shape", () => {
  const triangle = new Triangle("blue", "ABC", "black");
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,20 250,180 50, 180" fill="blue" />
       <text x="150" y="155" font-size="50" text-anchor="middle" fill="black">ABC</text>
        </svg>`;

  expect(triangle.render()).toEqual(svg);
});
