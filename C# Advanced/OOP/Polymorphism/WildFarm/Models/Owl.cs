using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Owl : Bird
    {
        public Owl(string type,string name, double weight, double wingsize) : base(type, name, weight, wingsize)
        {
        }

        public override void MakeSound()
        {
            Console.WriteLine("Hoot Hoot");
        }
    }
}