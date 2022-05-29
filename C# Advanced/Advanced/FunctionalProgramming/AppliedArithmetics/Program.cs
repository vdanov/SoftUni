using System;
using System.Collections.Generic;
using System.Linq;

namespace AppliedArithmetics
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            Action<int[]> print = nums => Console.WriteLine(string.Join(" ", numbers));

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "end")
                {
                    break;
                }
                else if (command == "print")
                {
                    print(numbers);
                }
                else
                {
                    Func<int, int> arithmetics = command switch
                    {
                        "multiply" => s => s * 2,
                        "subtract" => s => s - 1,
                        "add" => s => s + 1,
                        _ => null
                    };

                    numbers = numbers.Select(arithmetics).ToArray();
                }

               
            }
        }
    }
}