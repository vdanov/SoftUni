using System;

namespace SpeedRacing
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Car car = new Car();

            for (int i = 0; i < n; i++)
            {
                string[] carData = Console.ReadLine().Split();

                string model = carData[0];
                double fuelAmount = double.Parse(carData[1]);
                double fuelConsumption = double.Parse(carData[2]);

                car.Fleet.Add(model, new Car { Model = model, FuelAmount = fuelAmount, FuelConsumptionPerKilometer = fuelConsumption });
            }

            while (true)
            {
                string[] carData = Console.ReadLine().Split();

                if (carData[0] == "End")
                {
                    break;
                }

                string command = carData[0];
                string model = carData[1];
                double km = double.Parse(carData[2]);

                car.Drive(model, km);
            }

            foreach (var cars in car.Fleet)
            {
                Console.WriteLine($"{car.Fleet[cars.Key].Model} {car.Fleet[cars.Key].FuelAmount:F2} {car.Fleet[cars.Key].TravelledDistance}");
            }
        }
    }
}
