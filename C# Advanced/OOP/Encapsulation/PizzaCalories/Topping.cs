using System;
using System.Collections.Generic;

namespace PizzaCalories
{
    public class Topping
    {
        private const int CaloriesPerGram = 2;

        private double weight;
        private double calories;
        private string ingredient;

        private Dictionary<string, double> ingredients;

        public Topping(string ingredient, double weight)
        {
            ingredients = new Dictionary<string, double>
            {
                { "meat", 1.2 },
                { "veggies", 0.8 },
                { "cheese", 1.1 },
                { "sauce", 0.9 }
            };

            Ingredient = ingredient;
            Weight = weight;
            this.calories = SetCalories();
        }

        public string Ingredient
        {
            get => this.ingredient;
            private set
            {
                if (!ingredients.ContainsKey(value.ToLower()))
                {
                    throw new ArgumentException($"Cannot place {value} on top of your pizza.");
                }

                this.ingredient = value;
            }
        }

        public double Weight
        {
            get => this.weight;
            private set
            {
                if (value > 50)
                {
                    throw new ArgumentException($"{this.ingredient} weight should be in the range [1..50].");
                }

                this.weight = value;
            }
        }

        public double Calories => this.calories;

        private double SetCalories() => CaloriesPerGram * Weight * ingredients[ingredient.ToLower()];
    }
}
