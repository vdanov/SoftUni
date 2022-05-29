using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Animal : Food
    {
        private const double increasingWeightHen = 0.35;
        private const double increasingWeightOwl = 0.25;
        private const double increasingWeightMouse = 0.10;
        private const double increasingWeightCat = 0.30;
        private const double increasingWeightDog = 0.40;
        private const double increasingWeightTiger = 1.00;


        Func<string, string, string> foodCheck = (a, b) => (b) switch
        {
            "Hen" when a != "Vegetable" && a != "Fruit" && a != "Meat" && a != "Seeds" => $"{b} does not eat {a}!",
            "Owl" when a != "Meat" => $"{b} does not eat {a}!",
            "Dog" when a != "Meat" => $"{b} does not eat {a}!",
            "Tiger" when a != "Meat" => $"{b} does not eat {a}!",
            "Mouse" when a != "Vegetable" && a != "Fruit" => $"{b} does not eat {a}!",
            "Cat" when a != "Vegetable" && a != "Meat" => $"{b} does not eat {a}!",
            _ => null
        };

        public Animal(string type, string name, double weight)
        {
            Type = type;
            Name = name;
            Weight = weight;
            MakeSound();
        }

        public string Type { get; }

        public string Name { get; }

        public double Weight { get; protected set; }

        public override string TypeOfFood { get ; protected set ; }

        public double FoodEaten { get; set; }

        public override int FoodQuantity { get ; protected set ; }

        public abstract void MakeSound();

        public virtual void Feed(string foodType, int quantity)
        {
            if (foodCheck(foodType, Type) == null)
            {                
                switch (Type)
                {
                    case "Cat":
                        Weight += quantity * increasingWeightCat;
                        break;
                    case "Hen":
                        Weight += quantity * increasingWeightHen;
                        break;
                    case "Dog":
                        Weight += quantity * increasingWeightDog;
                        break;
                    case "Owl":
                        Weight += quantity * increasingWeightOwl;
                        break;
                    case "Mouse":
                        Weight += quantity * increasingWeightMouse;
                        break;
                    case "Tiger":
                        Weight += quantity * increasingWeightTiger;
                        break;

                    default:
                        break;
                }

                TypeOfFood = foodType;
                FoodQuantity = quantity;

                FoodEaten += quantity;
            }
            else
            {
                Console.WriteLine(foodCheck(foodType, Type));
            }
        }        
    }
}