using System;
using System.Collections.Generic;

namespace EqualityLogic
{
    public class Program
    {
        static void Main(string[] args)
        {
            SortedSet<Person> setPeople = new SortedSet<Person>();
            HashSet<Person> hashPeople = new HashSet<Person>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(' ',StringSplitOptions.RemoveEmptyEntries);
                string name = input[0];
                int age = int.Parse(input[1]);

                setPeople.Add(new Person(name,age));
                hashPeople.Add(new Person(name, age));
            }

            Console.WriteLine(setPeople.Count);
            Console.WriteLine(hashPeople.Count);
        }
    }
}