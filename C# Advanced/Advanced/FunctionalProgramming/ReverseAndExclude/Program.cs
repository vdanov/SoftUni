using System;
using System.Linq;

namespace ReverseAndExclude
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int n = int.Parse(Console.ReadLine());

            Func<int[], int[]> reverse = numbers => 
            {
                for (int i = 0, j = numbers.Length-1; i < numbers.Length / 2; i++, j--)
                {
                    int holder = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = holder;
                }
                return numbers;
            };

            Predicate<int> isDivisible = num => num % n != 0;

            Console.WriteLine(string.Join(" ", reverse(numbers).Where(x=> isDivisible(x))));
        }
    }
}