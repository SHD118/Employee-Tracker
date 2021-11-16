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
promptUser()
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
                viewDepartments()
                break;
            case "view all roles":
                viewRoles()
                break;
            case "view all employees":
                viewEmployees()
                break;
            case "add a department":
                addDepartment()
                break;
            case "add a role":
                addRole()
                break;
            case "add an employee":
                addEmployee()
                break;
            case "update an employee role":
                updateEmployeeRole()
                break;
            default:
                console.log("you are exiting");
                break;
        }
    })

}

//Write a function for each case statement
//function will need to query based of option literal


// VIEW
function viewDepartments() {
    db.query('SELECT * FROM company_db.department;', function (err, results) {
        console.table(results)
        promptUser()
    })
}
function viewRoles() {
    db.query('select role.title, role.id, role.salary, department.name from department RIGHT JOIN role on department.id = role.department_id;'
        , function (err, results) {
            console.table(results)
            promptUser()
        })
}
function viewEmployees() {
    // finish manager part of query
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT (manager_name.first_name, " ", manager_name.last_name) AS manager_name FROM employee
    Join employee manager_name on employee.manager_id = manager_name.id
    JOIN role ON employee.role_id = role.id
     JOIN department ON role.department_id = department.id;
   `
        , function (err, results) {
            console.table(results)
            promptUser()
        })
}

// ADD
function addDepartment() {

    return inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "Please enter a department name"
        }
    ]).then((results) => {


        db.query(` INSERT INTO department set name = ("${results.departmentName}") ;`
            , function (err, results) {
                viewDepartments()
                promptUser()
            })
    }
    )

}



function addRole() {

    db.query(`SELECT * FROM department;`
        , function (err, results) {
            let departArr = [];
            // console.table(results)
            results.forEach(result => departArr.push({ name: result.name, value: result.id }))
            // console.log(departArr)


            return inquirer.prompt([
                {
                    type: "input",
                    name: "roleName",
                    message: "Please enter a role namee"
                },
                {
                    type: "input",
                    name: "roleSalary",
                    message: "Please enter a role Salary"
                },
                {
                    type: "list",
                    name: "roleDepartment",
                    choices: departArr,
                    message: "Please enter a department roleDepartment"
                }
            ]).then((results) => {


                db.query(`INSERT INTO department set company_db.role.title = ${results.roleName}, company_db.role.salary = ${results.roleSalary}, company_db.role.department_id = ${results.roleDepartment} `
                    , function (err, results) {
                        console.log(err);

                    })
                viewRoles()
                promptUser()
            })
        })

}
function addEmployee() {
    db.query(`Select * From Employee;`, function (err, results) {
        return inquirer.prompt([
            {
                type: "input",
                name: "employeeFName",
                message: "Please enter the employees first name"
            },
            {
                type: "input",
                name: "employeeLName",
                message: "Please enter the employees last name"
            },
            {
                type: "input",
                name: "employeeRole",
                message: "Please enter a role for the employee"
            }
        ]).then((results) => {
            var empLN = results.last_name;
            var empFN = results.first_name;
            var empRoleID = results.role_id;
            
            db.query(`select * from employee where manager_id is null;`, function (err, results) {
                var employeeArr = [];
                results.forEach(result => employeeArr.push({ name: result.first_name + ' ' + result.last_name, value: result.id }));
                return inquirer.prompt([
                    {
                      type: "list",
                      name: "employeeManager",
                      message: "Who is the employee's manager?",
                      choices: employeeArr
                    },
                ]).then((data) => {
                    db.query(`INSERT INTO employee set company_db.employee.first_name = ${empFN}, company_db.employee.last_name = ${empLN}, company_db.employee.role_id = ${empRoleID}, company_db.employee.manager_id = ${data.employeeManager}`, function (err, results) { // working, the placeholder needed to be in ()
                        console.table(results);
                        console.log(err);
                      })
                  })
            })
        })
    })
}
function updateEmployeeRole() {

}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
 