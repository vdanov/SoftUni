using System;
using System.Linq;
using System.Collections.Generic;

namespace Raiding
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<BaseHero> heroes = new List<BaseHero>();
            int n = int.Parse(Console.ReadLine());

            while(heroes.Count != n)
            {
                string name = Console.ReadLine();
                string type = Console.ReadLine();

                switch (type.ToLower())
                {
                    case "paladin":
                        Paladin paladin = new Paladin(name);
                        heroes.Add(paladin);
                        break;
                    case "druid":
                        Druid druid = new Druid(name);
                        heroes.Add(druid);
                        break;
                    case "rogue":
                        Rogue rogue = new Rogue(name);
                        heroes.Add(rogue);
                        break;
                    case "warrior":
                        Warrior warrior = new Warrior(name);
                        heroes.Add(warrior);
                        break;
                    default:
                        Console.WriteLine("Invalid hero!");
                        break;
                }
            }

            int bossPower = int.Parse(Console.ReadLine());

            int teamPower = heroes.Sum(x => x.Power);

            heroes.ForEach(x => Console.WriteLine(x.CastAbility()));

            Console.WriteLine(teamPower >= bossPower ? "Victory!" : "Defeat...");
        }
    }
}