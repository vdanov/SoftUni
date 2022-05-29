using System;
using System.Linq;

namespace Froggy
{
    public class Program
    {
        static void Main(string[] args)
        {
            var creator = Console.ReadLine()
                .Split(new char[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Lake lake = new Lake(creator);
            string output = string.Empty;

            foreach (var stone in lake)
            {
                output += $"{stone}, ";
            }

            Console.WriteLine(output.TrimEnd(new char[] { ' ', ',' }));
        }
    }
}