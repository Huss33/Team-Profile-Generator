
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        super(name, id, email);
        this.github = github;
        }
    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer"  
    }
}
    
    const engineerQ = [
            {
                type:'input',
                message: 'Please enter engineer name:',
                name: 'name'
            },
            {
                type:'input',
                message: 'Please enter engineer id:',
                name: 'id'
            },
            {
                type:'input',
                message: 'Please enter engineer email:',
                name: 'email'
            },
            {
                type:'input',
                message: 'Please enter engineer GitHub username:',
                name: 'github'
            }
        ]
    


module.exports = {Engineer, engineerQ};