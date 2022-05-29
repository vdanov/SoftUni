using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioActiveMutantVampireBunnies
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] size = Console.ReadLine().Split().Select(int.Parse).ToArray();
            List<string> bunnyCoordinates = new List<string>();

            char[,] lair = new char[size[0], size[1]];

            int playerRow = 0;
            int playerCol = 0;

            for (int row = 0; row < lair.GetLength(0); row++)
            {
                string input = Console.ReadLine();

                for (int col = 0; col < input.Length; col++)
                {
                    if (input[col] == 'P')
                    {
                        playerCol = col;
                        playerRow = row;
                    }
                    else if (input[col] == 'B')
                    {
                        bunnyCoordinates.Add($"{row} {col}");
                    }

                    lair[row, col] = input[col];
                }
            }

            string directions = Console.ReadLine();
            bool flagWon = false;
            bool flagDead = false;

            for (int i = 0; i < directions.Length; i++)
            {
                lair[playerRow, playerCol] = '.';

                switch (directions[i])
                {
                    case 'U':
                        if (playerRow - 1 >= 0)
                            playerRow--;
                        else
                            flagWon = true;
                        break;

                    case 'D':
                        if (playerRow + 1 < size[0])
                            playerRow++;
                        else
                            flagWon = true;
                        break;

                    case 'L':
                        if (playerCol - 1 >= 0)
                            playerCol--;
                        else
                            flagWon = true;
                        break;

                    case 'R':
                        if (playerCol + 1 < size[1])
                            playerCol++;
                        else
                            flagWon = true;
                        break;

                    default:
                        break;
                }

                BunnySpread(lair, bunnyCoordinates);

                if (lair[playerRow, playerCol] == 'B')
                {
                    flagDead = true;
                }

                if (flagDead || flagWon)
                {
                    Print(lair);
                    Console.WriteLine(flagWon ? $"won: {playerRow} {playerCol}" : $"dead: {playerRow} {playerCol}");
                    break;
                }
            }
        }

        private static void Print(char[,] lair)
        {
            for (int row = 0; row < lair.GetLength(0); row++)
            {
                for (int col = 0; col < lair.GetLength(1); col++)
                {
                    Console.Write(lair[row, col]);
                }
                Console.WriteLine();
            }
        }

        private static void BunnySpread(char[,] lair, List<string> coordinates)
        {
            List<string> newCoordinates = new List<string>(coordinates);
            coordinates.Clear();

            for (int i = 0; i < newCoordinates.Count; i++)
            {
                int[] current = newCoordinates[i].Split(" ").Select(int.Parse).ToArray();
                int row = current[0];
                int col = current[1];

                if (lair[row, col] == 'B')
                {
                    if (row - 1 >= 0)
                    {
                        lair[row - 1, col] = 'B';
                        coordinates.Add($"{row - 1} {col}");
                    }

                    if (row + 1 < lair.GetLength(0))
                    {
                        lair[row + 1, col] = 'B';
                        coordinates.Add($"{row + 1} {col}");
                    }

                    if (col - 1 >= 0)
                    {
                        lair[row, col - 1] = 'B';
                        coordinates.Add($"{row} {col - 1}");
                    }

                    if (col + 1 < lair.GetLength(1))
                    {
                        lair[row, col + 1] = 'B';
                        coordinates.Add($"{row} {col + 1}");
                    }
                }
            }
        }
    }
}
