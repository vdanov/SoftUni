using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models
{
    public class Dog : Mammal
    {
        public Dog(string type, string name, double weight, string livingRegion) : base(type, name, weight, livingRegion)
        {
        }

        public override void MakeSound()
        {
            Console.WriteLine("Woof!");
        }
    }
}