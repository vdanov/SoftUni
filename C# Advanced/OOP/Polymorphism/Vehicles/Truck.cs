using System;

namespace Vehicles
{
    public class Truck : Vehicle
    {
        private const double ACadditionalConsumption = 1.6;
        private const double holeLosses = 0.95;
        public Truck(double fuel, double consumption, double tankCapacity) : base(fuel, consumption, tankCapacity)
        {
        }

        public override void Drive(double distance)
        {
            double fuelNeeded = ((FuelConsumption + ACadditionalConsumption) * distance);

            if (fuelNeeded < FuelQuantity)
            {
                FuelQuantity -= fuelNeeded;
                Console.WriteLine($"{this.GetType().Name} travelled {distance} km");
            }
            else
            {
                Console.WriteLine($"{this.GetType().Name} needs refueling");
            }
        }

        public override void Refuel(double liters, Func<double, double, bool> fuelCheck)
        {
            if (liters <= 0)
            {
                Console.WriteLine("Fuel must be a positive number");
            }
            else
            {
                if (fuelCheck(FuelQuantity + liters, TankCapacity))
                {
                    FuelQuantity += liters * holeLosses;
                }
                else
                {
                    Console.WriteLine($"Cannot fit {liters} fuel in the tank");
                }
            }
        }
    }
}