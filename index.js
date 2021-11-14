const inquirer = require("inquirer");
const mysql = require("mysql2");
require('dotenv').config()

//view all departments
// view all roles
// view all employees
//add department
//add role
//add employee
//update employee role

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log("Connected to the company_db database....")
);

db.connect((err) => {
    if (err) {
        throw error;
    }
});
//inqurir

function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "displayChoices",
            message: "Please choose an option",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]


        }
    ]).then((selectedOption) => {
        switch (selectedOption.displayChoices) {
            case "view all departments":
                "call function to query"
                break;
            case "view all roles":
                "call function to query"
                break;
            case "view all employees":
                "call function to query"
                break;
            case "add a department":
                "call function to query"
                break;
            case "add a role":
                "call function to query"
                break;
            case "add an employee":
                "call function to query"
                break;
                case "update an employee role":
                    "call function to query"
                break;
            default:
                console.log("your exiting");
                break;
        }
    })

}

//Write a function for each case statement
//function will need to query based of option literal

function viewDepartments() {
    
}
function viewRoles() {
    
}
function viewEmployees() {
    
}
function addDepartment() {
    
}
function addRole() {
    
}
function addEmployee() {
    
}
function updateEmployeeRole() {
    
}