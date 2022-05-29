using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Mammal : Animal
    {
        protected Mammal(string type, string name, double weight, string livingRegion) : base(type, name, weight)
        {
            LivingRegion = livingRegion;
        }

        public string LivingRegion { get; }

        public override string ToString()
        {
            return $"{this.GetType().Name} [{Name}, {Weight}, {LivingRegion}, {FoodEaten}]";
        }
    }
}