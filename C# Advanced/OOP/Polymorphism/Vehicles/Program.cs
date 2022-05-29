using System;

namespace Vehicles
{
    public class Program
    {
        static void Main(string[] args)
        {
            Func<double, double, bool> fuelCheck = (fuelquantity, tankCapacity) => fuelquantity <= tankCapacity; 
            Action<double, double> consumedFuel = (a, b) => a-=b;

            string[] carData = Console.ReadLine().Split();
            Car car = new Car(double.Parse(carData[1]), double.Parse(carData[2]), double.Parse(carData[3]));

            string[] truckData = Console.ReadLine().Split();
            Truck truck = new Truck(double.Parse(truckData[1]), double.Parse(truckData[2]), double.Parse(truckData[3]));

            string[] busData = Console.ReadLine().Split();
            Bus bus = new Bus(double.Parse(busData[1]), double.Parse(busData[2]), double.Parse(busData[3]));

            int lines = int.Parse(Console.ReadLine());

            for (int i = 0; i < lines; i++)
            {
                string[] input = Console.ReadLine().Split();

                string action = input[0];
                string typeVehicle = input[1];
                
                if (action == "Drive")
                {
                    if (typeVehicle == "Car")
                    {
                        car.Drive(double.Parse(input[2]));
                    }
                    else if (typeVehicle == "Truck")
                    {
                        truck.Drive(double.Parse(input[2]));
                    }
                    else if (typeVehicle == "Bus")
                    {
                        bus.Drive(double.Parse(input[2]));
                    }
                }
                else if (action == "Refuel")
                {
                    if (typeVehicle == "Car")
                    {
                        car.Refuel(double.Parse(input[2]), fuelCheck);
                    }
                    else if (typeVehicle == "Truck")
                    {
                        truck.Refuel(double.Parse(input[2]), fuelCheck);
                    }
                    else if (typeVehicle == "Bus")
                    {
                        bus.Refuel(double.Parse(input[2]), fuelCheck);
                    }
                }
                else if (action == "DriveEmpty")
                {
                    bus.Passangers = false;
                    bus.Drive(double.Parse(input[2]));
                }
            }
            
            Console.WriteLine($"Car: {car.FuelQuantity:F2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:F2}");
            Console.WriteLine($"Bus: {bus.FuelQuantity:F2}");
        }
    }
}