using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    public class Vehicle
    {
        private double defaultFuelConsumption = 1.25;

        public Vehicle(int horsePower, double fuel)
        {
            HorsePower = horsePower;
            Fuel = fuel;    
        }

        virtual public double FuelConsumption => defaultFuelConsumption;

        public int HorsePower { get; set; }

        public double Fuel { get; set; }

        virtual public void Drive(double km)
        {
            this.Fuel -= km * this.FuelConsumption;
        }
    }
}
