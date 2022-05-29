using System;
using System.Collections.Generic;
using WildFarm.Models;

namespace WildFarm
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split();
            int line = 0;
            Animal animal = null;

            List<Animal> animals = new List<Animal>();

            while (input[0] != "End")
            {
                //Felines -      "{Type} {Name} {Weight} {LivingRegion} {Breed}";
                //Birds -        "{Type} {Name} {Weight} {WingSize}";
                //Mice and Dogs -"{Type} {Name} {Weight} {LivingRegion}";

                if (line % 2 == 0)
                {
                    string type = input[0];
                    string name = input[1];
                    double weight = double.Parse(input[2]);
                    switch (type)
                    {
                        case "Cat":
                           
                            string livingRegion = input[3];
                            string breed = input[4];
                            animal = new Cat(type, name, weight, livingRegion, breed);
                            animals.Add(animal);
                            break;

                        case "Tiger":
                             livingRegion = input[3];
                             breed = input[4];
                            animal = new Tiger(type, name, weight, livingRegion, breed);
                            animals.Add(animal);
                            break;

                        case "Hen":
                            double wingsize = double.Parse(input[3]);
                            animal = new Hen(type, name, weight, wingsize);
                            animals.Add(animal);
                            break;

                        case "Owl":
                            wingsize = double.Parse(input[3]);
                            animal = new Owl(type, name, weight, wingsize);
                            animals.Add(animal);
                            break;

                        case "Mouse":
                            livingRegion = input[3];
                            animal = new Mouse(type, name, weight, livingRegion);
                            animals.Add(animal);
                            break;

                        case "Dog":
                            livingRegion = input[3];
                            animal = new Dog(type, name, weight, livingRegion);
                            animals.Add(animal);
                            break;

                        default:
                            break;
                    }
                }
                else
                {
                    string foodType = input[0];
                    int quantity = int.Parse(input[1]);

                    animal.Feed(foodType, quantity);

                }

                line++;
                input = Console.ReadLine().Split();
            }
            Console.WriteLine(string.Join(Environment.NewLine, animals));
        }
    }
}