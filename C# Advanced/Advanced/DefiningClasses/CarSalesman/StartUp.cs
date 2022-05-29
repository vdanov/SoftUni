using System;
using System.Linq;
using System.Collections.Generic;

namespace CarSalesman
{
    class StartUp
    {
        static void Main(string[] args)
        {
            List<Engine> engines = new List<Engine>();
            List<Car> cars = new List<Car>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] parts = Console.ReadLine().Split(" ",StringSplitOptions.RemoveEmptyEntries);

                engines.Add(GetEngineData(parts));                
            }

            int num = int.Parse(Console.ReadLine());

            for (int i = 0; i < num; i++)
            {
                string[] parts = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);

                cars.Add(GetCarData(parts, engines));
            }

            foreach (var car in cars)
            {
                Console.WriteLine($"{car.Model}:\n" +
                    $"  {car.Engine}\n" +
                    $"  Weight: {car.Weight}\n" +
                    $"  Color: {car.Color}");
            }
        }

        private static Engine GetEngineData(string[] parts)
        {
            Engine engine = new Engine();

            if (parts.Length == 4)
            {
               return engine = new Engine { Model = parts[0], Power = int.Parse(parts[1]), Efficiency = parts[3], Displacement = parts[2] };
            }
            else if (parts.Length == 3)
            {
                int temp;

                int.TryParse(parts[2], out temp);

                if (temp == 0)
                {
                    return engine = new Engine { Model = parts[0], Power = int.Parse(parts[1]), Efficiency = parts[2] };
                }
                else
                {
                    return engine = new Engine { Model = parts[0], Power = int.Parse(parts[1]), Displacement = parts[2] };
                }
            }
            else
            {
                return engine = new Engine { Model = parts[0], Power = int.Parse(parts[1]) };
            }
        }

        public static Car GetCarData(string[] parts, List<Engine> engines)
        {
            Engine tempEngine = engines.Where(x => x.Model == parts[1]).FirstOrDefault();

            Car car = new Car();

            if (parts.Length == 4)
            {
                return car = new Car { Model = parts[0], Engine = tempEngine, Weight = parts[2], Color = parts[3] };
            }
            else if (parts.Length == 3)
            {
                int temp;

                int.TryParse(parts[2], out temp);

                if (temp == 0)
                {
                    return car = new Car { Model = parts[0], Engine = tempEngine, Color = parts[2] };
                }
                else
                {
                    return car = new Car { Model = parts[0], Engine = tempEngine, Weight = parts[2] };
                }
            }
            else
            {
                return car = new Car { Model = parts[0], Engine = tempEngine };
            }
        }
    }
}