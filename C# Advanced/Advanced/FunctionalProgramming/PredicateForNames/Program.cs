using System;
using System.Collections.Generic;

namespace PredicateForNames
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string[] names = Console.ReadLine().Split();
            
            Func<string[], List<string>> lengthChecker = names =>
            {
                List<string> newNames = new List<string>();

                for (int i = 0; i < names.Length; i++)
                {
                    if (names[i].Length <= n)
                    {
                        newNames.Add(names[i]);
                    }
                }

                return newNames;
            };

            Console.WriteLine(string.Join(Environment.NewLine, lengthChecker(names)));
        }
    }
}