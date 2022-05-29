using System;
using System.Linq;

namespace Bombs
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());

            int[,] matrix = new int[size, size];

            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();

                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    matrix[row, col] = input[col];
                }
            }

            int[] data = Console.ReadLine().Split(new char[] { ' ', ',' }).Select(int.Parse).ToArray();

            for (int i = 0; i < data.Length - 1; i += 2)
            {
                int row = data[i];
                int col = data[i + 1];

                if (matrix[row, col] > 0)
                {
                    Detonate(matrix, row, col);
                }
            }

            Alive(matrix);
            Sum(matrix);
            Print(size, matrix);
        }

        private static void Print(int size, int[,] matrix)
        {
            for (int rou = 0; rou < size; rou++)
            {
                for (int cou = 0; cou < size; cou++)
                {
                    Console.Write(matrix[rou, cou] + " ");
                }

                Console.WriteLine();
            }
        }

        private static void Sum(int[,] matrix)
        {
            int sum = 0;
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (matrix[i, j] > 0)
                    {
                        sum += matrix[i, j];
                    }
                }
            }
            Console.WriteLine($"Sum: {sum}");
        }

        public static void Alive(int[,] matrix)
        {
            int alive = 0;
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (matrix[i, j] > 0)
                    {
                        alive++;
                    }
                }
            }
            Console.WriteLine($"Alive cells: {alive}");
        }
        private static int[,] Detonate(int[,] matrix, int row, int col)
        {
            if (row + 1 < matrix.GetLength(0))
            {
                if (matrix[row, col] > 0)
                {
                    matrix[row + 1, col] -= matrix[row, col];
                }

            }

            if (row - 1 >= 0)
            {
                if (matrix[row - 1, col] > 0)
                {
                    matrix[row - 1, col] -= matrix[row, col];
                }
            }

            if (col + 1 < matrix.GetLength(1))
            {
                if (matrix[row, col + 1] > 0)
                {
                    matrix[row, col + 1] -= matrix[row, col];
                }
            }

            if (col - 1 >= 0)
            {
                if (matrix[row, col - 1] > 0)
                {
                    matrix[row, col - 1] -= matrix[row, col];
                }
            }

            if (row + 1 < matrix.GetLength(0) && col + 1 < matrix.GetLength(1))
            {
                if (matrix[row + 1, col + 1] > 0)
                {
                    matrix[row + 1, col + 1] -= matrix[row, col];
                }
            }

            if (row - 1 >= 0 && col - 1 >= 0)
            {
                if (matrix[row - 1, col - 1] > 0)
                {
                    matrix[row - 1, col - 1] -= matrix[row, col];
                }
            }

            if (row - 1 >= 0 && col + 1 < matrix.GetLength(1))
            {
                if (matrix[row - 1, col + 1] > 0)
                {
                    matrix[row - 1, col + 1] -= matrix[row, col];
                }
            }

            if (row + 1 < matrix.GetLength(0) && col - 1 >= 0)
            {
                if (matrix[row + 1, col - 1] > 0)
                {
                    matrix[row + 1, col - 1] -= matrix[row, col];
                }
            }

            matrix[row, col] = 0;

            return matrix;
        }
    }
}
