CREATE PROC usp_GetEmployeesFromTown (@target VARCHAR(50))
AS
(SELECT E.FirstName, e.LastName
	 FROM Employees AS E
	 JOIN Addresses AS A ON E.AddressID = A.AddressID
	 JOIN Towns AS T ON A.TownID = T.TownID
	 WHERE T.Name = @target)
		