using System;

namespace Vehicles
{
    public abstract class Vehicle
    {
        public Vehicle(double fuel, double consumption, double tankCapacity)
        {
            if (fuel > tankCapacity)
            {
                FuelQuantity = 0;
            }
            else
            {
                FuelQuantity = fuel;
            }

            FuelConsumption = consumption;
            TankCapacity = tankCapacity;
        }

        public double TankCapacity { get; }
        public double FuelQuantity { get; protected set; }
        public double FuelConsumption { get; protected set; }

        public abstract void Drive(double distance);
        public virtual void Refuel(double liters, Func<double, double, bool> fuelCheck)
        {
            if (liters <= 0)
            {
                Console.WriteLine("Fuel must be a positive number");
            }
            else
            {
                if (fuelCheck(FuelQuantity + liters, TankCapacity))
                {
                    FuelQuantity += liters;
                }
                else
                {
                    Console.WriteLine($"Cannot fit {liters} fuel in the tank");
                }
            }
        }
    }
}