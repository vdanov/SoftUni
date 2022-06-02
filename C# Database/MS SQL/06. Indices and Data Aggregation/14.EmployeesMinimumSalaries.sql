SELECT DepartmentID, MIN(Salary) AS TotalSalary 
FROM Employees
WHERE HireDate > '01/01/2000' AND DepartmentID IN (2,5,7)
GROUP BY DepartmentID

/*
Select the minimum salary from the employees for departments with ID (2, 5, 7) but only for those hired after 01/01/2000.
*/