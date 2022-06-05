CREATE OR ALTER PROCEDURE usp_GetEmployeesSalaryAboveNumber (@target decimal(18,4))
	AS
	(SELECT FirstName, LastName
		FROM Employees
			WHERE Salary >= @target)
