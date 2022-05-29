using System;
using System.Linq;

namespace CustomMinFunction
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();

            Func<int[], int> findMin = input => 
            {
                int min = int.MaxValue;

                for (int i = 0; i < input.Length; i++)
                {
                    if (input[i] < min)
                    {
                        min = input[i];
                    }
                }

                return min;
            };

            Console.WriteLine(findMin(input));
        }
    }
}
