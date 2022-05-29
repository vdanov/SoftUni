using System;
using System.Collections.Generic;
using System.Text;

namespace SpeedRacing
{
    public class Car
    {
        public Car()
        {
            Fleet = new Dictionary<string, Car>();
        }
        public Dictionary<string, Car> Fleet { get; set; }

        public string Model { get; set; }

        public double FuelAmount { get; set; }

        public double FuelConsumptionPerKilometer { get; set; }

        public double TravelledDistance { get; set; }

        public void Drive(string model, double KM)
        {
            double neededFuel = this.Fleet[model].FuelConsumptionPerKilometer * KM;

            if (this.Fleet[model].FuelAmount >= neededFuel)
            {
                this.Fleet[model].FuelAmount -= neededFuel;
                this.Fleet[model].TravelledDistance += KM;
            }
            else
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
        }
    }
}
