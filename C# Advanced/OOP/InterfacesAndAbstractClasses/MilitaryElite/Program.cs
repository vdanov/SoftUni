using MilitaryElite.Interfaces;
using MilitaryElite.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MilitaryElite
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();

            List<ISoldier> soldiers = new List<ISoldier>();

            while (input[0] != "End")
            {
                string ID = input[1];
                string firstName = input[2];
                string lastName = input[3];
                switch (input[0])
                {
                    case "Private":
                        decimal salary = decimal.Parse(input[4]);
                        soldiers.Add(new Private(firstName, lastName, salary, ID));
                        break;
                    case "LieutenantGeneral":
                        salary = decimal.Parse(input[4]);

                        LieutenantGeneral lieut = new LieutenantGeneral(firstName, lastName, salary, ID);
                        if (input.Length > 5)
                        {
                            for (int i = 5; i < input.Length; i++)
                            {
                                lieut.Squad.Add(soldiers.Where(s => s.ID == input[i]).First());
                            }
                        }
                        soldiers.Add(lieut);
                        break;

                    case "Engineer":
                        salary = decimal.Parse(input[4]);
                        string corps = input[5];
                        Engineer engy = new Engineer(firstName, lastName, salary, ID);

                        try
                        {
                            engy.Corps = corps;
                        }
                        catch (ArgumentException ae)
                        {
                            Console.WriteLine(ae.Message);
                            input = Console.ReadLine().Split();
                            continue;
                        }
                        if (input.Length > 5)
                        {
                            for (int i = 6; i < input.Length - 1; i += 2)
                            {
                                engy.Repairs.Add(new Repair { PartName = input[i], WorkedHours = int.Parse(input[i + 1]) });
                            }
                        }
                        soldiers.Add(engy);
                        break;

                    case "Commando":
                        salary = decimal.Parse(input[4]);
                        corps = input[5];
                        Commando com = new Commando(firstName, lastName, salary, ID);
                        try
                        {
                            com.Corps = corps;
                        }
                        catch (ArgumentException ae)
                        {
                            Console.WriteLine(ae.Message);
                            input = Console.ReadLine().Split();
                            continue;
                        }

                        if (input.Length > 5)
                        {
                            for (int i = 6; i < input.Length - 1; i += 2)
                            {
                                try
                                {
                                    com.Missions.Add(new IMission { CodeName = input[i], State = (input[i + 1]) });
                                }
                                catch (Exception)
                                {
                                    continue;
                                }
                            }
                        }
                        soldiers.Add(com);
                        break;

                    case "Spy":
                        ID = input[1];
                        firstName = input[2];
                        lastName = input[3];
                        int code = int.Parse(input[5]);
                        soldiers.Add(new Spy(ID, firstName, lastName, code));
                        break;
                    default:
                        break;
                }

                input = Console.ReadLine().Split();
            }

            soldiers.ForEach(Console.WriteLine);
        }
    }
}