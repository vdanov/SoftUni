CREATE TABLE #SalaryOver30K
	(
		EmployeeID INT PRIMARY KEY,
		FirstName NVARCHAR(50),
		LastName NVARCHAR(50),
		MiddleName NVARCHAR(50),
		JobTitle NVARCHAR(50),
		DepartmentID INT,
		ManagerID INT REFERENCES #SalaryOver30K,
		HireDate DATETIME2,
		Salary MONEY,
		AddressID INT
	)

INSERT INTO #SalaryOver30K
SELECT * FROM Employees
WHERE Salary > 30000

DELETE FROM #SalaryOver30K WHERE ManagerID = 42

UPDATE #SalaryOver30K 
SET Salary = Salary + 5000
WHERE DepartmentID = 1

SELECT D.DepartmentID, AVG(d.Salary) AS AverageSalary FROM 
(
SELECT DepartmentID, Salary FROM #SalaryOver30K
GROUP BY DepartmentID, Salary
) AS D
GROUP BY D.DepartmentID

/*
Select all employees who earn more than 30000 into a new table. 48900
Then delete all employees who have ManagerID = 42 (in the new table). 
Then increase the salaries of all employees with DepartmentID=1 by 5000. 
Finally, select the average salaries in each department.
*/