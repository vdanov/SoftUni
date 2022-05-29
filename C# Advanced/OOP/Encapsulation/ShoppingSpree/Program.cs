using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppingSpree
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<Person> customers = new List<Person>();
            List<Product> listOfProducts = new List<Product>();

            string[] people = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);
            string[] products = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < people.Length; i++)
            {
                string[] personData = people[i].Split(new char[] { ' ', '=' });
                try
                {
                    customers.Add(new Person() { Name = personData[0], Money = decimal.Parse(personData[1]) });
                }
                catch (Exception m)
                {
                    Console.WriteLine(m.Message);
                    return;
                }
            }

            for (int j = 0; j < products.Length; j++)
            {
                string[] productData = products[j].Split(new char[] {' ', '='});

                try
                {
                    listOfProducts.Add(new Product() { Name = productData[0], Cost = decimal.Parse(productData[1]) });
                }
                catch (Exception m)
                {
                    Console.WriteLine(m.Message);
                    return;
                }
            }

            while (true)
            {
                string[] input = Console.ReadLine().Split();
                if (input[0] == "END")
                {
                    break;
                }

                string name = input[0];
                string productWanted = input[1];

                var customer = customers.Where(c => c.Name == name).First();
                var product = listOfProducts.Where(c => c.Name == productWanted).First();
                
                if (customer.Money >= product.Cost)
                {
                    foreach (var person in customers)
                    {
                        if (person.Name == name)
                        {
                            person.Money -= product.Cost;
                            person.BagOfProducts.Add(product);
                            break;
                        }
                    }
                  
                    Console.WriteLine($"{customer.Name} bought {product.Name}");
                }
                else
                {
                    Console.WriteLine($"{customer.Name} can't afford {product.Name}");
                }
            }

            customers.ForEach(Console.WriteLine);
        }
    }
}
