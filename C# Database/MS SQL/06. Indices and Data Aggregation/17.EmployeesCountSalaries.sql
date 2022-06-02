SELECT COUNT(Salary) AS [Count] FROM Employees
WHERE ManagerID IS NULL
/*
Count the salaries of all employees who don’t have a manager.
*/