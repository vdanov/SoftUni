using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    public class RaceMotorcycle : Motorcycle
    {
        private double defaultFuelConsumption = 8;

        public RaceMotorcycle(int horsePower, double fuel) : base(horsePower, fuel)
        {

        }

        public override double FuelConsumption => defaultFuelConsumption;

        public override void Drive(double km)
        {
            this.Fuel -= km * this.FuelConsumption;
        }
    }
}
