
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        
        super(name, id, email);
        this.officeNum = officeNum;
        }
    
    getOfficeNumber() {
        return this.officeNum;
    }
    
    getRole() {
        return "Manager";  
    }
}

const managerQ = [
    {
        type:'input',
        message: 'Please enter manager name:',
        name: 'name'
    },
    {
        type:'number',
        message: 'Please enter manager id:',
        name: 'id'
    },
    {
        type:'input',
        message: 'Please enter manager email:',
        name: 'email'
    },
    {
        type:'number',
        message: 'Please enter manager office number:',
        name: 'officeNum'
    }
]

module.exports = {Manager, managerQ};