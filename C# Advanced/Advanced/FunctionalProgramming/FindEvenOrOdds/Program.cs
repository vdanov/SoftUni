using System;
using System.Collections.Generic;
using System.Linq;

namespace FindEvenOrOdds
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] boundries = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int[] numbers = ListFilling(boundries);

            string condition = Console.ReadLine();

            Predicate<int> prdct = condition switch
            {
                "odd" => n => n % 2 != 0,
                "even" => n => n % 2 == 0,
                _ => null
            };

            Console.WriteLine(string.Join(" ", MyMethod(numbers, prdct)));
        }

        private static int[] ListFilling(int[] boundries)
        {
            int start = boundries[0];
            int stop = boundries[1];

            int[] numbers = new int[stop - start + 1];

            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = start++;
            }

            return numbers;
        }

        static List<int> MyMethod(int[] nums, Predicate<int> pr)
        {
            List<int> numbarz = new List<int>();
            foreach (var num in nums)
            {
                if (pr(num))
                {
                    numbarz.Add(num);
                }
            }

            return numbarz;
        }
    }
}