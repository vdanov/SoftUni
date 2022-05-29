using System;
using System.Collections.Generic;
using System.Linq;

namespace FoodShortage
{
    class Program
    {
        static void Main(string[] args)
        {
            List<IBuyer> detained = new List<IBuyer>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split();

                if (input.Length == 3)
                {
                    detained.Add(new Rebel() { Name = input[0], Age = int.Parse(input[1]), Group = input[2] });
                }
                else if (input.Length == 4)
                {
                    detained.Add(new Citizen() { Name = input[0], Age = int.Parse(input[1]), ID = input[2], Birthday = input[3] });
                }
            }

            string name;

            while ((name = Console.ReadLine()) != "End")
            {
                if (detained.Where(x => x.Name == name).FirstOrDefault() != null)
                {
                    detained.Where(x => x.Name == name).FirstOrDefault().BuyFood();
                }
            }


            Console.WriteLine(detained.Sum(x => x.Food));
        }
    }
}