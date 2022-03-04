
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
        return "Intern";  
    }
}

const internQ = [
            
            {
                type:'input',
                message: 'Please enter intern name:',
                name: 'name'
            },
            {
                type:'number',
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
        ]
    


module.exports = {Intern, internQ};