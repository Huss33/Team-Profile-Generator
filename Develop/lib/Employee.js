const inquirer = require('inquirer');
const jest = require('jest');


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName = () => {
        console.log(`${this.name}`);
    }
    
    getId = () => {
        console.log(`${this.id}`);
    }
    
    getEmail = () => {
        console.log(`${this.email}`);
    }
    
    getRole = () => {
        return testValue  
    }
}



const testValue = 'Employee';
// const testValue = 'Alice';
// const testValue = 100;
// const name = "Alice";
const e = new Employee("Alice", 1, 'test@test.com');
// console.log(typeof(e));
// console.log(e.name);
// console.log(e.id);
// console.log(e.email);
// e.getName();
// e.getId();
// e.getEmail();
e.getRole();


module.exports = Employee;