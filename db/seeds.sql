INSERT INTO department (id, name)
VALUES (001, "Math"),
       (002, "Science");

INSERT INTO role (id, title, salary, department_id)
VALUES (007, "Math", 500000, 001),
       (0010, "Science", 100000, 002);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (008, "Sid". "Desai", 007, 008),
       (009, "Kim". "Possible", 010, 009);
