using System;

namespace PizzaCalories
{
    public class Dough
    {
        private const int CaloriesPerGram = 2;

        private string flourType;
        private string bakingTechnique;
        private double weight;
        private double calories;

        public Dough(string typeOfFlour, string technique, double grams)
        {
            TypeOfFlour = typeOfFlour;
            BakingTechnique = technique;
            Weight = grams;

            this.calories = SetCalories();
        }

        public double Calories => this.calories;

        public string TypeOfFlour
        {
            get => this.flourType;
            set
            {
                if (value.ToLower() == "white")
                {
                    this.flourType = "1.5";
                }
                else if (value.ToLower() == "wholegrain")
                {
                    this.flourType = "1.0";
                }
                else
                {
                    throw new ArgumentException("Invalid type of dough.");
                }
            }
        }

        public string BakingTechnique
        {
            get => this.bakingTechnique;
            private set
            {
                if (value.ToLower() == "crispy")
                {
                    this.bakingTechnique = "0.9";
                }
                else if (value.ToLower() == "chewy")
                {
                    this.bakingTechnique = "1.1";
                }
                else if (value.ToLower() == "homemade")
                {
                    this.bakingTechnique = "1.0";
                }
                else
                {
                    throw new ArgumentException("Invalid type of dough.");
                }
            }
        }

        public double Weight
        {
            get => this.weight;
            private set
            {
                if (value < 0 || value > 200)
                {
                    throw new ArgumentException("Dough weight should be in the range [1..200].");
                }
                this.weight = value;
            }
        }

        //(2 * 100) * 1.5 * 1.1 
        private double SetCalories() => (CaloriesPerGram * Weight) * double.Parse(this.flourType) * double.Parse(this.bakingTechnique);
    }
}
