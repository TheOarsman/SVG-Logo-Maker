const inquire = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");

const shapeChoices = { Circle, Square, Triangle };

inquire.createPromptModule([
  // Choose shape
  {
    type: "list",
    message: "What shape would you like?",
    name: "shape",
    choices: shapeChoices,
  },

  // Choose shape color
  {
    type: "list",
    message: "What color would you like the shape to be? Choose color format:",
    name: "shapeColorChoice",
    choices: ["color keyword", "hexadecimal"],
  },

  // Validate shape color
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color keyword",
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
    type: "textColorChoice",
    message: "What color would you like the text to be? Choose color format:",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },

  // Validate Text color
  {
    type: "input",
    name: "textColor",
    message: "Enter the color keyword",
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

  {
    type: "input",
    message: "Enter text for logo",
  },
]);

const svgContent = shape.render();

fs.writeFile("Logo.svg", svgContent, (err) =>
  err
    ? console.error(err)
    : console.log("SVG Logo & file created successfully!")
);
