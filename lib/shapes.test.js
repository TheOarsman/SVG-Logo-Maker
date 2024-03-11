const { Circle, Square, Triangle } = require("./shapes");

describe("Current Shape classes", () => {
  test("Circle render shape", () => {
    const circle = new Circle("black", "red", "C");
    const svg = `<svg 
        version 1.1
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
        text-anchor="middle
        fill="black">C</text>

        </svg>`;

    expect(circle.render()).toEqual(svg);
  });
});
