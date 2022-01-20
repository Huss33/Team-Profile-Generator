const inquirer = require('inquirer');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./src/page-template');




inquirer.prompt([
    {
        type:'input',
        message: 'Please enter employee name:',
        name: 'emplyName'
    },
    {
        type:'input',
        message: 'Please enter employee id:',
        name: 'emplyId'
    },
    {
        type:'input',
        message: 'Please enter employee email:',
        name: 'emplyEmail'
    },
])