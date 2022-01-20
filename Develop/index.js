const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./src/page-template');


function init() {

    inquirer.prompt([
        {
            type:'input',
            message: 'Please enter employee name:',
            name: 'name'
        },
        {
            type:'input',
            message: 'Please enter employee id:',
            name: 'id'
        },
        {
            type:'input',
            message: 'Please enter employee email:',
            name: 'email'
        },
        {
            type:'list',
            message: 'Please enter current employee position:',
            name: 'position',
            choices: ["manager", "engineer", "intern"]
        }
    ])
        .then(({ name, id, email, })=> {
                // console.log(emplyPosition);
            if (emplyPosition === "manager") {
                console.log("This employee is a manager!");
                let man = new Manager(name, id, email, emplyOfficeNumber)
                man.getOfficeNumber();
                man.getRole();
            }
        })
};

init();


    // inquirer.prompt([
    //     {
    //         type:'input',
    //         message: 'Please enter Manager office number:',
    //         name: 'manoffnum'
    //     }
    // ])

    // inquirer.prompt([
    //     {
    //         type:'input',
    //         message: 'Please enter engineer GitHub username:',
    //         name: 'enginGitHub'
    //     }
    // ])

    // inquirer.prompt([
    //     {
    //         type:'input',
    //         message: 'Please enter intern school:',
    //         name: 'internSchool'
    //     }
    // ])
