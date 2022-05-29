using System;
using System.Collections.Generic;

namespace ComparingObjects
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();
            List<Person> list = new List<Person>();

            while (input[0] != "END")
            {
                string name = input[0];
                int age = int.Parse(input[1]);
                string town = input[2];

                list.Add(new Person(name, age, town));
                input = Console.ReadLine().Split();
            }

            int n = int.Parse(Console.ReadLine());
            Person theOne = list[n - 1];
            int matches = 0;

            foreach (var person in list)
            {
                if (theOne.CompareTo(person) == 0)
                {
                    matches++;
                }
            }

            if (matches - 1 > 0)
            {
                Console.WriteLine($"{matches} {list.Count - matches} {list.Count}");
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }
    }
}