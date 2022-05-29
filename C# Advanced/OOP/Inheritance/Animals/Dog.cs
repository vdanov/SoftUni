using System;
using System.Collections.Generic;
using System.Text;

namespace Animals
{
    public class Dog : Animal
    {
        private const string sound = "Woof!";

        public Dog(string name, int age, string gender)
            : base(name, age, gender)
        {
        }

        public override void ProduceSound()
        {
            Console.WriteLine(sound);
        }

        public override string ToString()
        {
            return "Dog";
        }
    }
}