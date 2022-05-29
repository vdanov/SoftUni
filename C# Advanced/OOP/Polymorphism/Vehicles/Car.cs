using System;

namespace Vehicles
{
    public class Car : Vehicle
    {
        private const double ACadditionalConsumption = 0.9;

        public Car(double fuel, double consumption, double tankCapacity) : base(fuel, consumption, tankCapacity)
        {
        }

        public override void Drive(double distance)
        {

            // cons * distance / 100
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
    }
}