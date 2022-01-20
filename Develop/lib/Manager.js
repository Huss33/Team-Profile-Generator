// const inquirer = require('inquirer');
// const jest = require('jest');

const Employee = require("./Employee");


class Manager extends Employee {
    constructor(officeNumber) {
        
        super("Foo", 1, "test@test.com");
        this.officeNumber = officeNumber;
        }
    
    // getName() {
    //     return this.name;
    // }
    
    // getId() {
    //     return this.id;
    // }
    
    // getEmail() {
    //     return this.email;
    // }

    getOfficeNumber() {
        return this.Manager.officeNumber;
    }
    
    getRole() {
        if (this.Manager.officeNumber)
        return "Manager"  
    }
}

// const testValue = 100;
// const e = new Manager('Foo', 1, 'test@test.com', testValue);

// console.log(e.officeNumber);



module.exports = Employee;