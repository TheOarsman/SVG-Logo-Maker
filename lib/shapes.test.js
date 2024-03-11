const { Circle, Square, Triangle } = require("./shapes");

describe("Circle render shape", () => {
  test("should render circle with correct attributes", () => {
    const circle = new Circle("black", "ABC", "red");
    const svg = `<svg 
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">

        <circle
        cx="150"
        cy="100"
        r="80"
        fill="red" />

        <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="black">ABC</text>

        </svg>`;

    expect(circle.render()).toEqual(svg);
  });
});

describe("Square render shape", () => {
  test("should render square with correct attributes", () => {
    const square = new Square("black", "ABC", "green");
    const svg = `<svg 
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">

         <rect
         x="50"
         y="50"
         width="200"
         height="200"
         fill="green" />

        <text
        x="150"
        y="150"
        font-size="60"
        text-anchor="middle"
        fill="black">ABC</text>

        </svg>`;

    expect(square.render()).toEqual(svg);
  });
});

describe("Triangle render shape", () => {
  test("should render triangle with correct attributes", () => {
    const triangle = new Triangle("black", "ABC", "blue");
    const svg = `<svg 
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">

          <polygon points="150,20 250,180 50, 180"
         fill="blue" />

       <text
         x="150"
         y="155"
         font-size="50"
         text-anchor="middle"
         fill="black">ABC</text>

        </svg>`;

    expect(triangle.render()).toEqual(svg);
  });
});
