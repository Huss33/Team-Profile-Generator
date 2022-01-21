const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./src/page-template');

const man1 = new Manager("Bob", 1, "bob@bob.com", 33);
const crew = [];

function init() {

    inquirer.prompt([
        {
            type:'input',
            message: 'Please enter manager name:',
            name: 'name'
        },
        {
            type:'input',
            message: 'Please enter manager id:',
            name: 'id'
        },
        {
            type:'input',
            message: 'Please enter manager email:',
            name: 'email'
        },
        {
            type:'input',
            message: 'Please enter manager office number:',
            name: 'officeNum'
        }
    ])
    init()  
        .then(({ name, id, email, officeNum }) => {
            console.log(ans);
            let boss = new Manager(name, id, email, officeNum);
            crew.push(boss);
            console.log(crew);
            fs.writeFile('index.html', "utf-8", JSON.stringify(crew, null, 4), (err) => {
                if (err) throw err;
                console.log('successful');
                yesNo();
             })
        })      
}


function choose() {
    
    inquirer.prompt([
        {
            type:'list',
            message: 'Please choose additional employee position:',
            name: 'position',
            choices: ["engineer", "intern"]
        }
    ])
    .then(({ position }) => {
        const {engineer, intern} = position;
        const engineer = new Engineer(name, id, email, github);
        const intern = new Intern(name, id, email, school);
        if (position === "engineer") {
            engineer();    
        } if else {
            (position === "intern") {
                intern();
            }
         } generateTeam();  
}

function yesNo() {
    
    inquirer.prompt([
        {
        type: "confirm",
        message: "Would you like to add an Engineer or Intern to your team?",
        name: "add"
        }
    ])
    .then(({ add }) => {
        if (add) {
            choose();
        } return
    })
}
