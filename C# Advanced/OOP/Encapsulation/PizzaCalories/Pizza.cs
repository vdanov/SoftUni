using System;
using System.Collections.Generic;

namespace PizzaCalories
{
    public class Pizza
    {
        private string name;
        private List<Topping> toppings;

        public Pizza(string name)
        {
            Name = name;
            toppings = new List<Topping>();
        }

        public string Name
        {
            get => this.name;
            private set
            {
                if (string.IsNullOrEmpty(value) || value.Length < 1 || value.Length > 15)
                {
                    throw new ArgumentException("Pizza name should be between 1 and 15 symbols.");
                }

                this.name = value;
            }
        }

        public Dough Dough { get; set; }

        public int numberOfToppings => toppings.Count;

        public double Calories => SetCalories();

        private double SetCalories()
        {
            double cals = 0;

            if (toppings.Count > 0)
            {
                foreach (var topping in toppings)
                {
                    cals += topping.Calories;
                }
                cals += this.Dough.Calories;
            }

            return cals;
        }

        public void AddTopping(Topping topping)
        {
            if (this.toppings.Count > 10)
            {
                throw new Exception("Number of toppings should be in range [0..10].");
            }
                this.toppings.Add(topping);
        }

        public override string ToString()
        {
            return $"{Name} - {Calories:F2} Calories.";
        }
    }
}
