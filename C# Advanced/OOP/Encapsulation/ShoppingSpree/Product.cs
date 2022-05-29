using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingSpree
{
    public class Product
    {
        private string name;
        private decimal cost;

        public decimal Cost
        {
            get  => this.cost; 
            set 
            {
                if (value < 0)
                {
                    throw new ArgumentException("Money cannot be negative");
                }

                this.cost = value;
            }
        }

        public string Name
        {
            get => this.name; 
            set 
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be empty");
                }

               this.name = value;
            }
        }

        public override string ToString()
        {
            return $"{Name}";
        }
    }
}
