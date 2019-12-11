function startProg() {
    const inquirer = require("axios");
    const axios = require("axios");
    const
    const fs = require("fs");
    let nameQ;
    let companyQ;
    let actualNameQ;
    let urlImageQ;
    let locationQ;
    let githubProfileQ;
    let followersQ;
    let starsQ;
    let reposQ;
    let followingQ;
    let favColorQ;

    inquirer.prompt([{
        message: "Enter github username",
        name: "enteredName"
    },
    {
        message: "What is your favorite color?",
        name: "enteredColor"
    }])
        .then(function ({ enteredName, enteredColor }) {
            userName = enteredName;
            favColor = enteredColor;
            const queryUrl = `https://api.github.com/users/${username}`;
            gitQuery(queryUrl);
        });

    function gitQuery(URL) {
        axios.get(url)
            .then(function (response) {
                companyQ = response.data.company;
                actualNameQ = response.data.name;
                urlImageQ = response.data.avatar_url;
                locationQ = response.data.location;
                githubProfileQ = response.data.html_url;
                followersQ = response.data.followers;
                starsQ = response.data.starsQ;
                reposQ = response.data.public_repos;
                followingQ = response.data.following;
                const gitQuery = `https://api.github.com/users/${username}`;
                buildFIle(gitQuery);
            















}