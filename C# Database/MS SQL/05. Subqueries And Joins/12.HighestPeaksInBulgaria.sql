SELECT C.CountryCode, M.MountainRange, P.PeakName, P.Elevation FROM Countries AS C
JOIN MountainsCountries AS MC ON MC.CountryCode = C.CountryCode AND C.CountryCode = 'BG'
JOIN Mountains AS M ON MC.MountainId = M.Id
JOIN Peaks AS P ON M.Id = P.MountainId AND P.Elevation > 2835
ORDER BY P.Elevation DESC



/*
Write a query that selects:
•	CountryCode
•	MountainRange
•	PeakName
•	Elevation
Filter all peaks in Bulgaria with elevation over 2835. Return all the rows sorted by elevation in descending order.
*/