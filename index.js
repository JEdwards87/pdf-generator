function startProg() {

    const inquirer = require("inquirer");
    const axios = require("axios");
    const fs = require('fs'),
        convertFactory = require('electron-html-to');

    const conversion = convertFactory({
        converterPath: convertFactory.converters.PDF
    });
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

    inquirer
        .prompt([{
            message: "Enter github username",
            name: "enteredName"
        },
        {
            message: "What is your favorite color?",
            name: "enteredColor"
        }])
        .then(function ({ enteredName, enteredColor }) {
            nameQ = enteredName;
            favColor = enteredColor;
            const query = `https://api.github.com/users/${nameQ}`;
            gitQuery(query);
        });

    function gitQuery(URL) {
        axios.get(URL)
            .then(function (response) {
                nameQ = response.data.nameQ
                companyQ = response.data.company;
                actualNameQ = response.data.name;
                urlImageQ = response.data.avatar_url;
                locationQ = response.data.location;
                githubProfileQ = response.data.url;
                followersQ = response.data.followers;
                starsQ = response.data.starred;
                reposQ = response.data.public_repos;
                followingQ = response.data.following;
                bioQ = response.data.bio;
                blogQ = response.data.blog;
                buildFile();
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }
    function buildFile() {
        const resume = `
            <!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
      <style>
      </style>
      <title>Document</title>
        </head>
        <body has-background-light>
            <div class="card has-text-centered is-${favColor}">
            <img src="${urlImageQ}"></src>
            </div>
            <br>
            <br>
            <div class="card>
            <h1">Greetings!</h1>
            <h1>My name is ${actualNameQ}</h1>
            <h2>I'm currently @ ${companyQ}</h2>
            <h2>
            <span><a href="">${locationQ}</a></span>
            <br>
            <span><a href="${githubProfileQ}">Github</a></span>
            </h2>
            </div>
            <br>
            <br>
            <div class="card">
            <h2>
            Public Repositories
            </h2>
            <h3>
            ${reposQ}
            </h3>
            </div>
            <br>
            <br>
            <div class="card">
            <h2>
            Github Stars
            </h2>
            <h3>
            ${starsQ}
            </h3>
            </div>
            <br>
            <br>
            <div class="card">
            <h2>
            Followers
            </h2>
            <h3>
            ${followersQ}
            </h3>
            </div>
            <br>
            <br>
            <div class="card">
            <h2>
            Following
            </h2>
            <h3>
            ${followingQ}
            </h3>
            </div>
            <br>
            <br>
            <div class="card'>
            <h2>
            blog
            </h2>
            <h3>
            ${blogQ}
            </h3>
            </div>
        </body>
        </html>
        `
        conversion({ html: resume }, function (err, result) {
            if (err) {
                return console.error(err);
            }
            console.log(result.numberOfPages);
            console.log(result.logs);
            result.stream.pipe(fs.createWriteStream('./resume.pdf'));
            conversion.kill();
        });
    }
} startProg()















