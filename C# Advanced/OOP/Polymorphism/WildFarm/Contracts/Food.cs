using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Food
    {
        public abstract string TypeOfFood { get;protected set; }

        public abstract int FoodQuantity { get;protected set; }
    }
}