using System;

namespace PizzaCalories
{
    public class Program
    {
        static void Main(string[] args)
        {
            string[] pizzaName = Console.ReadLine().Split();
            string[] pizzaDough = Console.ReadLine().Split();

            try
            {
                Pizza pizza = new Pizza(pizzaName[1]);
                pizza.Dough = new Dough(pizzaDough[1], pizzaDough[2], double.Parse(pizzaDough[3]));

                while (true)
                {
                    string[] topping = Console.ReadLine().Split();
                    if (topping[0] == "END")
                    {
                        Console.WriteLine(pizza);
                        break;
                    }

                    try
                    {
                        pizza.AddTopping(new Topping(topping[1], double.Parse(topping[2])));
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.Message);
                        break;
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}