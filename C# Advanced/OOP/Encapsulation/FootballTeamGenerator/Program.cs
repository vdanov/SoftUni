using System;
using System.Linq;
using System.Collections.Generic;

namespace FootballTeamGenerator
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<Team> teams = new List<Team>();

            while (true)
            {
                try
                {
                    string[] input = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);
                    if (input[0] == "END")
                    {
                        break;
                    }

                    string command = input[0];
                    string teamName = input[1];

                    switch (command)
                    {
                        case "Team":
                            teams.Add(new Team(teamName));
                            break;

                        case "Add":
                            if (teams.Any(t => t.Name == teamName))
                            {
                                Player player = new Player(
                                    input[2],
                                    int.Parse(input[3]),
                                    int.Parse(input[4]),
                                    int.Parse(input[5]),
                                    int.Parse(input[6]),
                                    int.Parse(input[7]));

                                teams.Where(t => t.Name == teamName).First().AddPlayer(player);
                            }
                            else
                            {
                                Console.WriteLine($"Team {teamName} does not exist.");
                            }

                            break;

                        case "Remove":

                            if (!teams.Any(t => t.Name == teamName))
                            {
                                Console.WriteLine($"Team {teamName} does not exist.");
                                break;
                            }
                            bool flag = true;
                            foreach (var team in teams)
                            {
                                foreach (var player in team.Players)
                                {
                                    if (player.Name == input[2])
                                    {
                                        team.Players.Remove(player);
                                        flag = false;
                                        break;
                                    }
                                }
                            }

                            if (flag)
                            {
                                Console.WriteLine($"Player {input[2]} is not in {teamName} team.");
                            }

                            break;

                        case "Rating":
                            if (teams.Any(t => t.Name == input[1]))
                            {
                                Console.WriteLine($"{teamName} - {teams.Where(t => t.Name == input[1]).First().Rating}");
                            }
                            else
                            {
                                Console.WriteLine($"Team {teamName} does not exist.");
                            }
                            break;

                        default:
                            break;
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }
    }
}