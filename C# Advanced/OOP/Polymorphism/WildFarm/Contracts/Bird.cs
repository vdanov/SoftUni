using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Bird : Animal
    {
        protected Bird(string type, string name, double weight, double wingsize) : base(type, name, weight)
        {
            WingSize = wingsize;
        }

        public double WingSize { get; }

        public override string ToString()
        {
            return $"{Type} [{Name}, {WingSize}, {Weight}, {FoodEaten}]";
        }
    }
}