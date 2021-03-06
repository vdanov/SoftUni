SELECT TOP(5) C.CountryName, MAX(P.Elevation) AS HighestPeakElevation, MAX(R.Length) AS LongestRiverLegth FROM Countries AS C
 LEFT JOIN MountainsCountries   AS MC ON C.CountryCode = MC.CountryCode
 LEFT JOIN Mountains		    AS M ON MC.MountainId = M.Id
 LEFT JOIN Peaks				AS P ON P.MountainId = M.Id
 LEFT JOIN CountriesRivers		AS CR ON C.CountryCode = CR.CountryCode
 LEFT JOIN Rivers				AS R ON CR.RiverId = R.Id
  GROUP BY C.CountryName
  ORDER BY HighestPeakElevation DESC, LongestRiverLegth DESC, CountryName

/*
For each country, find the elevation of the highest peak and the length of the longest river,
sorted by the highest peak elevation (from highest to lowest), then by the longest river length (from longest to smallest),
then by country name (alphabetically).
Display NULL when no data is available in some of the columns. Limit only the first 5 rows.
*/