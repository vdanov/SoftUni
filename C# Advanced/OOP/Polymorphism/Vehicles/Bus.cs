using System;

namespace Vehicles
{
    public class Bus : Vehicle
    {
        private const double ACadditionalConsumption = 1.4;

        public Bus(double fuel, double consumption, double tankCapacity) : base(fuel, consumption, tankCapacity)
        {
        }

        public bool Passangers { get; set; } = true;

        public override void Drive(double distance)
        {
            double fuelNeeded = Passangers ? ((FuelConsumption + ACadditionalConsumption) * distance) : (distance * FuelConsumption);

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