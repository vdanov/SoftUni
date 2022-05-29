using System;
using System.Collections.Generic;
using System.Linq;

namespace FilterByAge
{
    class Program
    {

        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<People> people = new List<People>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(", ");
                people.Add(new People { Name = input[0], Age = int.Parse(input[1]) });
            }
            
            string condition = Console.ReadLine();
            int filter = int.Parse(Console.ReadLine());
            string format = Console.ReadLine();

            Func<People, bool> filterByAge = condition switch
            {
                "younger" => p => p.Age <= filter,
                "older" => p => p.Age >= filter,
                _ => null
            };

            Func<People, string> filterByFormat = format switch
            {
                "name age" => p => $"{p.Name} - {p.Age}",
                "name" => p => p.Name,
                _=> null
            };

            people.Where(filterByAge)
                .Select(filterByFormat)
                .ToList()
                .ForEach(Console.WriteLine);
        }
        class People
        {
            public int Age { get; set; }

            public string Name { get; set; }
        }
    }
}
