// const inquirer = require('inquirer');
// const jest = require('jest');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return "Employee"  
    }
}

// const testValue = 'Employee';
// const testValue = 'Alice';
// const testValue = 100;
// const name = "Alice";
// const e = new Employee(testValue, 1, 'test@test.com');
// console.log(typeof(e));
// console.log(e.name);
// console.log(e.id);
// console.log(e.email);
// e.getName();
// e.getId();
// e.getEmail();
// getRole();

module.exports = Employee;