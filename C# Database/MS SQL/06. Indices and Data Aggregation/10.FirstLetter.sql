SELECT LEFT(FirstName, 1) FROM WizzardDeposits
WHERE DepositGroup = 'Troll Chest'
GROUP BY LEFT(FirstName, 1)

/*
Write a query that returns all unique wizard first letters of their first names only if they have deposit of type Troll Chest.
Order them alphabetically. Use GROUP BY for uniqueness.
*/