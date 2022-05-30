SELECT COUNT(C.CountryCode) AS [Count] FROM Countries AS C
FULL JOIN MountainsCountries AS MC ON C.CountryCode = MC.CountryCode
FULL JOIN Mountains AS M ON MC.MountainId = M.Id
WHERE M.Id IS NULL

-- Find all the count of all countries, which don’t have a mountain.