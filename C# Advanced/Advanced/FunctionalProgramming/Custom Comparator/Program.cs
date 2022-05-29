using System;
using System.Collections.Generic;
using System.Linq;

namespace Custom_Comparator
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            Func<int, int, int> comparatorByValue = (a, b) =>
            {
                if (a % 2 == 0 && b % 2 == 0)
                {
                    if (a < b)
                    {
                        return -1;
                    }

                    if (a > b)
                    {
                        return 1;
                    }

                    return 0;
                }

                if (a % 2 != 0 && b % 2 != 0)
                {
                    if (a < b)
                    {
                        return -1;
                    }

                    if (a > b)
                    {
                        return 1;
                    }

                    return 0;
                }

                if (a % 2 == 0)
                {
                    return -1;
                }

                if (a % 2 != 0)
                {
                    return 1;
                }

                return 0;
            };

            Array.Sort(numbers, new Comparison<int>(comparatorByValue));

            //5 6 3 2 7 1 8 4

            Console.WriteLine(string.Join(" ", numbers));

            int a = 1;
            a = 2;
            int b = a;
            Console.WriteLine(b);

        }
    }
}