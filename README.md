<div align ="center">

# Svg Logo Maker

![License Badge](https://shields.io/badge/license-MIT-blue)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) 
[![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat)](https://jestjs.io/)

</div>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributions](#contributions)
- [Tests](#tests)
- [Links](#links)
- [Contact Information](#contact-information)
- [License](#license)

## Description
In this week's challenge, as a transitional web developer I was tasked with creating a powerful Node.js command-line tool. Svg Logo Maker is an application designed to empower web developers by enabling them to effortlessly generate simple logos for their projects. Svg Logo Maker allows a seamless blend of user-friendly prompts and a range of customization options, including text, colors, and shapes. This tool provides a cost-effective solution for creating personalized logos, eliminating the need for external graphic designers.

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

```

## Technologies
The technologies I used in this challenge includes:

1. JavaScript
2. Node.js
3. Inquirer Package
4. Jest Package
5. Visual Studio Code(VS-code)
6. Github: Github was used to create a repository which includes the links to the projects, index.js, package.json, and the README file.
7. Gitlab: Gitlab was used to clone the project to our laptop.

## Installation
1. To install the challenge#10 , first create a new repository in your Github account, and then clone this repository to your local computer. 
```
To clone: git clone https://github.com/your-username/repository-name.git   
```           
2. Install Node.js [v20.11.0]
3. Install Jest [v29.7.0]
4. Open the cloned repository in a visual studio code. 
5. Open integrated terminal on index.js in order to run "npm i inquirer@8.2.4" on the command line to install inquirer package, jest packing using the command "npm install jest --save-dev. In addition, create a gitignore file, which should include node_modules.

## Usage
1. Open the cloned repostory in a source code editor(visual studio code). 
2. Open integrated terminal on index.js. 
3. Enter "node index.js n command line. 
4. Presented with npm inquirer questions through sequential order within directory - Users are required to input essential information in order to generate a shape. 
5. Once completed a SVG file named "logo.svg" will be created.

## Screenshot
![Svg Logo Maker command-line](/images/svg_logo_maker_first.png)

![Svg Logo Maker jest test](/images/svg_logo_maker_jest.png)

![Svg Logo Maker Circle](/examples/logo_svg_circle.png)

![Svg Logo Maker Square](/examples/logo_svg_square.png)

![Svg Logo Maker Triangle](/examples/logo_svg_triangle.png)

## Contributions
Contributions to the SVG Logo Maker are welcome and encouraged. Here are some ways you can contribute:

1. **Bug Reports and Feature Requests:**
    - If you encounter any issues or have suggestions for new features, please open an issue on the GitHub repository.
    
2. **Enhancements to Svg Logo Maker:**
    - We welcome contributions aimed at improving Svg Logo Maker. If you find ways to enhance the application or identify any limitations, feel free to submit a pull request.

3. **Documentation Improvements:**
    - Help improve the clarity and completeness of this documentation. If you find areas that need clarification or additional information, submit a pull request with your suggested changes.

## Tests
To run unit testing, open the terminal, and use the command npm run test.

## Links

[Video Link]()
  
## Contact Information
I appreciate and encourage any questions you may have. Feel free to reach out for further information.

- GitHub: [MunibaP](https://github.com/MunibaP)
- Email: munibapervez596@gmail.com

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please refer to [MIT]() to acquire details about this license


<div align ="center">

### Copyright © 2024 Muniba Pervez

</div>