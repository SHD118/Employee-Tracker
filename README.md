# Employee-Tracker
### Siddharth Desai
## Description
The purpose of this project was to create a command-line application to manage a company's database. The database consist of three tables role, employee and department (shown below). The user will be prompted with a series of choices (shown below) and dpending on their selection they will be able to view/write/delete to the database tables based one their selection. All the results will diplay on the users console. 

```
choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "delete an employee", "delete a department",  "delete a role", "view a deparment budgetment"]
```

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

<br/>
## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
6. [ Tests. ](#tests)
7. [ Questions. ](#questions)
7. [ Resources. ](#resources)
## Installation
* Clone the repository using:
```
git@github.com:SHD118/Team-Profile.git
```
* Ensure you are in the current working directory
* Ensure all dependencies are installed (jest and inquirer) installation instructions are below:
```
npm install jest
```
```
npm install inqurier
```

Run the the best team profile generator by typing the following in the terminal:
```
node index.js
```
## Usage
* Naviagte to the project directory in a integrated terminal
* Run the index.js (node index.js)
* Answer all the prompted questions in the terminal 
* Once "Finished building the Team" and index.html page will generate.
* To View right click the index.html file and open it in a broswer of your choice
* You have successfully generated and are now able to view your team profile
## License
Free Use
## Tests
* Ensure jest is installed (npm install jest)
* In the command line, write:
```
npm run test
```
* Confirm all four test suites pass (see screenshot below). Test suites are located in the test folder and are titled: Employee.test.js, Engineer.test.js, Intern.test.js, and Manager.test.js
## Questions?
Want to see more of my work? [Github Link](https://github.com/SHD118/Team-Profile)
<br/>
Want to learn more please contact me at shdesai118@gmail.com

## Video
https://www.awesomescreenshot.com/video/5886615?key=8e58678b166e2cd4032ef5bbbd91e962

## Screenshots
![](image/website.PNG)

![](image/run.PNG)

![](image/test.PNG)

## Links
* https://shd118.github.io/Team-Profile/
* https://github.com/SHD118/Team-Profile

## Resources
* https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
* https://fontawesome.com/v6.0/icons?q=gra&m=free
* https://www.npmjs.com/package/inquirer

