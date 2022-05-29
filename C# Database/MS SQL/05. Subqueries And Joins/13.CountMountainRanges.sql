SELECT C.CountryCode, COUNT(m.MountainRange)
FROM Countries AS C
INNER JOIN MountainsCountries MC
ON C.CountryCode = MC.CountryCode
INNER JOIN Mountains M
ON MC.MountainId = M.Id
WHERE C.CountryName in ('United States', 'Russia', 'Bulgaria')
GROUP BY C.CountryCode

/*
Write a query that selects:
•	CountryCode
•	MountainRanges
Filter the count of the mountain ranges in the United States, Russia and Bulgaria
*/