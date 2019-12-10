function startProg() {
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
    let followers;
    let stars;
    let repos;
    let following;
    let favColor;
    
    inquirer.prompt([{
        message: "Enter github username",
        name: "enteredName"
    },
    {
        message: "What is your favorite color?",
        name: "enteredColor"
    }])
    .then(function ({ enteredName, enteredColor }) {
        username = enteredName;
        favColor = enteredColor;
        const queryUrl = `https://api.github.com/users/${username}`;
        gitQuery(queryUrl);
    });
    Function gitQuery()

    
    











}