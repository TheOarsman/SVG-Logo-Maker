const inquire = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");

const shapeChoices = ["Circle", "Square", "Triangle"];
const colorKeyWords = ["Blue", "Green", "Indigo", "Orange", "Red", "Violet", "Yellow"];


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
            type: "list",
            message: "What color would you like the text to be? Choose color format:",
            name: "textColorChoice",
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
            message: "Enter text for logo (no more than 3 characters)",
            name: "text",
        },
    ])

    .then((answers) => {
        switch (answers.shape) {
            case "Circle":
                shape = new Circle(
                    answers.chooseShape,
                    answers.shapeColorChoice,
                    answers.text);
                break;
            case "Sqaure":
                shape = new Square(
                    answers.chooseShape,
                    answers.shapeColorChoice,
                    answers.text);
                break;
            case "Triangle":
                shape = new Triangle(
                    answers.chooseShape,
                    answers.shapeColorChoice,
                    answers.text);
                break;
            default;
                console.log("No shape currently selected!")
                shape = new Shape(answers.chooseShape, answers.shapeColorChoice, answers.text);
                break;
        }
 

        const svgContent = shape.render();

        fs.writeFile("Logo.svg", svgContent, (err) =>
            err
                ? console.error(err)
                : console.log("SVG Logo & file created successfully!")
        );
    });
