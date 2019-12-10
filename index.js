function initialize() {
    const inquirer = require("axios");
    const axios = require("axios");
    const
    const fs = require("fs");

    let name;
    let company;
    let actualName;
    let urlImage;
    let location;
    let githubProfile;
    let blog;
    let following;
    let followers;
    let bio;
    let repos;
    let stars;
    let favColor;

    inquirer.prompt([{
        message: "Enter github username",
        name: "name"
    },
    {
        message: "What is your favorite color?",
        name: "color"
    }])
    
    


}