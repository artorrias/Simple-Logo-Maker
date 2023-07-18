const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");

let questions = ["Enter three characters", "Enter a color or hexcode for the text", "Enter a color or hexcode", "Select a shape"];

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'text',
            validate: (text) => {
                if (text.length > 3) {
                    return "please enter no more than 3 characters";
                }
                return true;
            },
        },
        {
            type: 'input',
            message: questions[1],
            name: 'textcolor',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'logocolor',
        },
        {
            type: 'list',
            message: questions[4],
            choices: ["circle", "triangle", "square"],
            name: 'shape',
        }
    ])
    .then(response => {
        if (response.shape === "triangle") {
            let logoText = response.text.toUpperCase();
            let logo = new Triangle(response.logocolor, response.textcolor, logoText);
            let svg = logo.render();
            fs.writeFile('./examples/logo.svg', svg , (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("svg made");
                }
            });
        }
        else if (response.shape === "circle") {
            let logoText = response.text.toUpperCase();
            let logo = new Circle(response.logocolor, response.textcolor, logoText);
            let svg = logo.render();
            fs.writeFile('./examples/logo.svg', svg , (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("svg made");
                }
            });
        }
        else {
            let logoText = response.text.toUpperCase();
            let logo = new Square(response.logocolor, response.textcolor, logoText);
            const svg = logo.render();
            fs.writeFile('./examples/logo.svg', svg , (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("svg made");
                }
            });
        }
    })
}

init();
