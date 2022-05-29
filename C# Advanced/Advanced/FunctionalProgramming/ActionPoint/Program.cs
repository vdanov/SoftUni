using System;
using System.Linq;

namespace ActionPoint
{
    class Program
    {
        static void Main(string[] args)
        {
            Action<string[]> action = (input) => input.Select(x => "Sir " + x).ToList().ForEach(Console.WriteLine);
            
            string[] input = Console.ReadLine().Split();

            action(input);
        }
    }
}
