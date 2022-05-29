using System;
using System.Collections.Generic;
using System.Text;

namespace Cars
{
    public class Tesla : IElectricCar
    {
        public Tesla(string model, string color, int batteries)
        {
            Battery = batteries;
            Model = model;
            Color = color;
        }
        public int Battery { get; private set; }
        public string Model { get; private set; }
        public string Color { get; private set; }

       
        public string Start()
        {
            return "Engine start";
        }

        public string Stop()
        {
            return "Breaaak!";
        }
        
        public override string ToString()
        {
            return $"{Color} {this.GetType().Name} {Model} with {Battery} Batteries\n{Start()}\n{Stop()}";
        }
    }
}
