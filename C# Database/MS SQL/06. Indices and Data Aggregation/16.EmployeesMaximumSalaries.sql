SELECT D.DepartmentID, MAX(D.Salary) AS MaxSalary FROM (
SELECT DepartmentID,  Salary FROM Employees
GROUP BY DepartmentID, Salary
) AS D
GROUP BY D.DepartmentID
HAVING MAX(D.Salary) < 30000 OR MAX(D.Salary) > 70000

/*
Find the max salary for each department. Filter those, which have max salaries NOT in the range 30000 – 70000
*/