using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models
{
    public class Tiger : Feline
    {
        public Tiger(string type, string name, double weight, string livingRegion, string breed) : base(type, name, weight, livingRegion, breed)
        {
        }

        public override void MakeSound()
        {
            Console.WriteLine("ROAR!!!");
        }
    }
}