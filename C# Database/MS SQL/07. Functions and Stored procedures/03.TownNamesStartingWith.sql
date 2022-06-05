CREATE OR ALTER PROCEDURE usp_GetTownsStartingWith (@target VARCHAR(50))
	AS
	(select T.Name from Towns AS T
		WHERE LEFT(T.Name, 1) = @target)