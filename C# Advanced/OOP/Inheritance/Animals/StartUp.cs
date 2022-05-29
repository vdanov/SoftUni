using System;
using System.Collections.Generic;

namespace Animals
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            List<Animal> animals = new List<Animal>();

            while (true)
            {
                string type = Console.ReadLine();

                if (type == "Beast!")
                {
                    break;
                }

                string[] input = Console.ReadLine().Split();

                try
                {
                    switch (type)
                    {
                        case "Cat":
                            Cat cat = new Cat(input[0], int.Parse(input[1]), input[2]);
                            animals.Add(cat);
                            break;

                        case "Tomcat":
                            Tomcat tomcat = new Tomcat(input[0], int.Parse(input[1]));
                            animals.Add(tomcat);
                            break;

                        case "Kitten":
                            Kitten kitten = new Kitten(input[0], int.Parse(input[1]));
                            animals.Add(kitten);
                            break;
                             
                        case "Dog":
                            Dog dog = new Dog(input[0], int.Parse(input[1]), input[2]);
                            animals.Add(dog);
                            break;

                        case "Frog":
                            Frog frog = new Frog(input[0], int.Parse(input[1]), input[2]);
                            animals.Add(frog);
                            break;

                        default:
                            break;
                    }
                }

                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }

            foreach (var animal in animals)
            {
                Console.WriteLine(animal);
                Console.WriteLine($"{animal.Name} {animal.Age} {animal.Gender}");
                animal.ProduceSound();
            }
        }
    }
}