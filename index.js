// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square} = require("./lib/shapes");

// Initializing properties using class
class Svg {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    render() {
        return `<svg version = "1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    getTextElement(){
        return this.textElement;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
    
}

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal):',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
];

// Function to write data file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success, you have Generated a logo.svg!");
    });
}

async function init() {
    console.log("Starting init");
    let svgString = "";
    let svg_file = "logo.svg";

    // Use inquirer to prompt the user with the predefined questions and await their responses
    const answers = await inquirer.prompt(questions);

    // User text input validation
    let user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        // valid entry: user input is between 1 and 3 characters
        user_text = answers.text;
    } else {
        // if invalid entry, display error message and exit
        console.log("Invalid user text! Please enter characters between 1 and 3 only");
        return;
    }
    console.log("User text: [" + user_text + "]");

    // Font color input
    const fontColor = answers["textColor"];
    console.log("Font Color: [" + fontColor + "]");

    // Shape color input
    const shapeColor = answers.shapeColor;
    console.log("Shape Color: [" + shapeColor + "]");

    // Selected Shape input
    const selectedShape = answers["shape"];
    console.log("Chosen shape = [" + selectedShape + "]");

    // Selected Shape input
    let selected_shape;
    if (selectedShape === "Triangle") {
        selected_shape = new Triangle();
        console.log("User Selected Triangle");

    } else if (selectedShape === "Circle") {
        selected_shape = new Circle();
        console.log("User Selected Circle");

    } else if (selectedShape === "Square") {
        selected_shape = new Square();
        console.log("User Selected Square");

    } else {
        console.log("Invalid Shape!");
        return;
    }

    selected_shape.setColor(shapeColor);


    // Creating an Svg instance, set its text and shape elements, and generate the SVG string
    // Create a new svg instance
    let svg = new Svg();

    // Adding the text element and font color in the svg instance
    svg.setShapeElement(selected_shape);
    
    svg.setTextElement(user_text, fontColor);
    // Adding the shape element in the svg instance

    // Generating final svg string
    svgString = svg.render();

    // log Generated scg string to the console
    console.log("Display shape:\n\n" + svgString);

    // Function to indicate when Shape has been created
    console.log("The Svg Shape have been Successfully Created");

    // // Funtion to write the generated svg string to file
    console.log("Saving Svg to file");
    writeToFile(svg_file, svgString);
}

init();