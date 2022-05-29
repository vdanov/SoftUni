using System;
using System.Collections.Generic;
using System.Linq;

namespace RawData
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            List<Car> cars = new List<Car>();

            int fleet = int.Parse(Console.ReadLine());

            for (int i = 0; i < fleet; i++)
            {
                string[] carData = Console.ReadLine().Split();

                cars.Add(new Car(carData[0],
                    int.Parse(carData[1]),
                    int.Parse(carData[2]),
                    int.Parse(carData[3]), carData[4],
                    double.Parse(carData[5]),
                    int.Parse(carData[6]),
                    double.Parse(carData[7]),
                    int.Parse(carData[8]),
                    double.Parse(carData[9]),
                    int.Parse(carData[10]),
                    double.Parse(carData[11]),
                    int.Parse(carData[12])));
            }

            string kind = Console.ReadLine();

            if (kind == "fragile")
            {
                cars.Where(car => car.Tires.Any(x => x.TirePressure < 1)).ToList().ForEach(Console.WriteLine);
            }
            else if (kind == "flamable")
            {
                cars.Where(car => car.Engine.EnginePower > 250).ToList().ForEach(Console.WriteLine);
            }
        }
    }
}