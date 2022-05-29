SELECT TOP (5) C.CountryName, R.RiverName FROM Countries AS C
FULL OUTER JOIN CountriesRivers AS CR ON C.CountryCode = CR.CountryCode
FULL OUTER JOIN Rivers AS R ON CR.RiverId = R.Id
WHERE C.ContinentCode = 'AF'
ORDER BY C.CountryName

/*
•	CountryName
•	RiverName
Find the first 5 countries with or without rivers in Africa. Sort them by CountryName in ascending order.
*/