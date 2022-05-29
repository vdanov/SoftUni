using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models
{
    public class Mouse : Mammal
    {
        public Mouse(string type, string name, double weight, string livingRegion) : base(type, name,weight, livingRegion)
        {
        }

        public override void MakeSound()
        {
            Console.WriteLine("Squeak");
        }
    }
}