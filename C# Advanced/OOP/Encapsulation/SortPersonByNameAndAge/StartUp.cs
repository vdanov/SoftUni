using System;
using System.Collections.Generic;
using System.Linq;

namespace PersonsInfo
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>();

            int n = int.Parse(Console.ReadLine());
            Team team = new Team("SoftUni");

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split();

                people.Add(new Person(input[0], input[1], int.Parse(input[2])));
            }

            foreach (var person in people)
            {
                team.AddPlayer(person);
            }

            Console.WriteLine($"First team has {team.FirstTeam.Count} players.");
            Console.WriteLine($"Reserve team has {team.ReserveTeam.Count} players.");
        }
    }
}