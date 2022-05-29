using System;
using System.Collections.Generic;
using System.Linq;

namespace BorderControl
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<IIdentifiable> detained = new List<IIdentifiable>();

            string[] input = Console.ReadLine().Split();

            while (input[0] != "End")
            {
                if (input.Length is 3)
                {
                    detained.Add(new Citizen() { Name = input[0], Age = int.Parse(input[1]), ID = input[2] });
                }
                else if (input.Length is 2)
                {
                    detained.Add(new Robot() { Model = input[0], ID = input[1] });
                }
                
                input = Console.ReadLine().Split();
            }

            string number = Console.ReadLine();

            detained.Where(x => x.ID.Substring(x.ID.Length - number.Length) == number).ToList().ForEach(Console.WriteLine);
        }
    }
}