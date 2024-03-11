const inquire = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

const shapeChoices = ["Circle", "Square", "Triangle"];
const colorKeyWords = [
  "Black",
  "Blue",
  "Green",
  "Indigo",
  "Orange",
  "Red",
  "Violet",
  "White",
  "Yellow",
];

inquire
  .prompt([
    // Choose shape
    {
      type: "list",
      message: "What shape would you like?",
      name: "chooseShape",
      choices: shapeChoices,
    },

    // Choose shape color
    {
      type: "list",
      message:
        "What color would you like the shape to be? Choose color format:",
      name: "shapeColorChoice",
      choices: ["color keyword", "hexadecimal"],
    },

    // Validate shape color
    {
      type: "list",
      name: "shapeColor",
      message: "Enter the color keyword",
      choices: colorKeyWords,
      when: (answers) => {
        if (answers.shapeColorChoice === "color keyword") {
          return true;
        }
        return false;
      },

      validate: (answer) => {
        let answerLowerCase = answer.toLowerCase();
        for (var i = 0, len = colorKeyWords.length; i < len; ++i) {
          if (answerLowerCase.indexOf(colorKeyWords[i]) !== -1) {
            return true;
          }
        }
        return console.log("Please enter a valid color keyword");
      },
    },
    {
      // hexadecimal
      type: "input",
      name: "shapeColor",
      message: "Enter a hexadecimal number (#CCCCCC)",
      when: (answers) => {
        if (answers.shapeColorChoice === "hexadecimal") {
          return true;
        }
      },
    },

    // Choose text color
    {
      type: "list",
      message: "What color would you like the text to be? Choose color format:",
      name: "textColorChoice",
      choices: ["color keyword", "hexadecimal"],
    },

    // Validate Text color
    {
      type: "list",
      name: "textColor",
      message: "Enter the color keyword",
      choices: colorKeyWords,
      when: (answers) => {
        if (answers.textColorChoice === "color keyword") {
          return true;
        }
        return false;
      },

      validate: (answer) => {
        let answerLowerCase = answer.toLowerCase();
        for (var i = 0, len = colorKeyWords.length; i < len; ++i) {
          if (answerLowerCase.indexOf(colorKeyWords[i]) !== -1) {
            return true;
          }
        }
        return console.log("Please enter a valid color keyword");
      },
    },
    {
      // hexadecimal
      type: "input",
      name: "textColor",
      message: "Enter a hexadecimal number (#CCCCCC)",
      when: (answers) => {
        if (answers.textColorChoice === "hexadecimal") {
          return true;
        }
      },
    },
    // Input text for inside of shape
    {
      type: "input",
      message: "Enter text for logo (no more than 3 characters)",
      name: "text",
      validate: (input) => {
        if (input.length > 3) {
          return "You may not enter more than 3 letters!";
        }
        return true;
      },
    },
  ])

  .then((answers) => {
    // Mapping the string shape name to the actual shape class
    const shapeClassMap = {
      Circle,
      Square,
      Triangle,
    };

    // Getting the selected shape class
    const ShapeClass = shapeClassMap[answers.chooseShape];

    // Instantiating the selected shape class
    const shape = new ShapeClass(
      answers.shapeColor,
      answers.text,
      answers.textColor
    );

    const svgContent = shape.render();
    fs.writeFile("Logo.svg", svgContent, (err) =>
      err
        ? console.error(err)
        : console.log("SVG Logo & file created successfully!")
    );
  });
