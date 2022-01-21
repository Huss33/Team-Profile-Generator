
const Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, id, email, school) {
        
        super(name, id, email);
        this.school = school;
        }
    
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern"  
    }

    intern() {
        inquirer.prompt([
            {
                type:'input',
                message: 'Please enter intern name:',
                name: 'name'
            },
            {
                type:'input',
                message: 'Please enter intern id:',
                name: 'id'
            },
            {
                type:'input',
                message: 'Please enter intern email:',
                name: 'email'
            },
            {
                type:'input',
                message: 'Please enter intern school:',
                name: 'school'
            }
        ])
    }
}

module.exports = Intern;