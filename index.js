const inquirer = require('inquirer');
const jest = require('jest');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs');

const { Engineer, engineerQ } = require('./lib/Engineer');
const { Intern, internQ } = require('./lib/Intern');
const { Manager, managerQ } = require('./lib/Manager');
const team = require('./src/page-template');

let crew = [];

const init = () => {
    inquirer.prompt(managerQ)
    .then(managerInput => {
        const { name, id, email, officeNum } = managerInput;
        const teamManager = new Manager(name, id, email, officeNum);
        crew.push(teamManager);
        addEmployee();
    });
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Choose position of next team member.',
            choices: ['Intern', 'Engineer', 'Finished adding employees.']
        }
    ])
        .then(choices => {
            if (choices.name === 'Intern') {
                createIntern();
                return;
            } else if (choices.name === 'Engineer') {
                createEngineer();
                return;
            } else {
                formHtml();
                return;
            }
        });
}

function formHtml() {
    let codeFile = team(crew);
    fs.writeFile('./dist/index.html', codeFile,
        (err) => {
            if (err) {
                console.log(err);
            }
            console.log('File created!');
        })
}

const createEngineer = () => {
    inquirer.prompt(engineerQ)
        .then(engineerInput => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            crew.push(engineer);
            addEmployee();
        });
}

const createIntern = () => {
    inquirer.prompt(internQ)
        .then(internInput => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            crew.push(intern);
            addEmployee();
        });
}

init();