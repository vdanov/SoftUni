using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Hen : Bird
    {
        public Hen(string type, string name, double weight, double wingsize) : base(type, name, weight, wingsize)
        {
        }

        public override void MakeSound()
        {
            Console.WriteLine("Cluck");
        }
    }
}
