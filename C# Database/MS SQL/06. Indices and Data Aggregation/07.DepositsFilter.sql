SELECT * FROM
(SELECT DepositGroup, SUM(DepositAmount) AS TotalSum
FROM WizzardDeposits
WHERE MagicWandCreator = 'Ollivander family'
GROUP BY DepositGroup)
AS T1
WHERE T1.TotalSum < 150000
ORDER BY T1.TotalSum DESC

/*
Select all deposit groups and their total deposit sums but only for the wizards who have their magic wands crafted by Ollivander family.
Filter total deposit amounts lower than 150000.
Order by total deposit amount in descending order.
*/