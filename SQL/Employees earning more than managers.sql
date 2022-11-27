Select Employee.name AS Employee
From Employee
Join Employee Manager ON Employee.managerID = Manager.id
Where Employee.salary > Manager.salary;