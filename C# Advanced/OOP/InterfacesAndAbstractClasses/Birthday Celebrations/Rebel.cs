using System;
using System.Collections.Generic;
using System.Text;

namespace BirthdayCelebrations
{
    public class Rebel : IInfo, IBuyer
    {
        public string Name { get; set; }

        public int Age { get ; set; }

        public string Group { get; set; }

        public int Food { get; protected set; }

        public void BuyFood()
        {
            Food += 5;
        }
        public override string ToString()
        {
            return Food.ToString();
        }
    }
}
