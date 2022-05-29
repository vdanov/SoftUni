using System;
using System.Linq;

namespace Miner
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());
            char[,] matrix = new char[size, size];

            string[] commands = Console.ReadLine().Split();

            int currentRow = 0;
            int currentCol = 0;

            int coals = 0;

            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                char[] input = Console.ReadLine().Split().Select(char.Parse).ToArray();

                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    matrix[row, col] = input[col];

                    if (matrix[row, col] == 's')
                    {
                        currentRow = row;
                        currentCol = col;
                    }
                    else if (matrix[row, col] == 'c')
                    {
                        coals++;
                    }
                }
            }

            for (int i = 0; i < commands.Length; i++)
            {
                if (commands[i] == "up")
                {
                    if (currentRow - 1 >= 0)
                    {
                        if (matrix[currentRow - 1, currentCol] == 'c')
                        {
                            coals--;
                            matrix[currentRow - 1, currentCol] = 's';
                            matrix[currentRow, currentCol] = '*';
                        }
                        else if (matrix[currentRow - 1, currentCol] == 'e')
                        {
                            Console.WriteLine($"Game over! ({currentRow - 1}, { currentCol})");
                            return;
                        }
                        currentRow = currentRow - 1;
                    }
                }
                else if (commands[i] == "down")
                {
                    if (currentRow + 1 < matrix.GetLength(0))
                    {
                        if (matrix[currentRow + 1, currentCol] == 'c')
                        {
                            coals--;
                            matrix[currentRow + 1, currentCol] = 's';
                            matrix[currentRow, currentCol] = '*';
                        }
                        else if (matrix[currentRow + 1, currentCol] == 'e')
                        {
                            Console.WriteLine($"Game over! ({currentRow + 1}, { currentCol})");
                            return;
                        }
                        currentRow = currentRow + 1;
                    }
                }
                else if (commands[i] == "left")
                {
                    if (currentCol - 1 >= 0)
                    {
                        if (matrix[currentRow, currentCol - 1] == 'c')
                        {
                            coals--;
                            matrix[currentRow, currentCol - 1] = 's';
                            matrix[currentRow, currentCol] = '*';
                        }
                        else if (matrix[currentRow, currentCol - 1] == 'e')
                        {
                            Console.WriteLine($"Game over! ({currentRow}, { currentCol - 1})");
                            return;
                        }
                        currentCol = currentCol - 1;
                    }
                }
                else if (commands[i] == "right")
                {
                    if (currentCol + 1 < matrix.GetLength(1))
                    {
                        if (matrix[currentRow, currentCol + 1] == 'c')
                        {
                            coals--;
                            matrix[currentRow, currentCol + 1] = 's';
                            matrix[currentRow, currentCol] = '*';
                        }
                        else if (matrix[currentRow, currentCol + 1] == 'e')
                        {
                            Console.WriteLine($"Game over! ({currentRow}, { currentCol + 1})");
                            return;
                        }

                        currentCol = currentCol + 1;
                    }
                }

                if (coals <= 0)
                {
                    Console.WriteLine($"You collected all coals! ({currentRow}, {currentCol})");
                    return;
                }
            }

            Console.WriteLine($"{coals} coals left. ({currentRow}, {currentCol})");
        }
    }
}
