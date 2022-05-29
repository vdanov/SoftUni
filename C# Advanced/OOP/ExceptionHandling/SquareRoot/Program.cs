using System;

namespace SquareRoot
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                int number = int.Parse(Console.ReadLine());
                if (number < 0)
                {
                    throw new ArithmeticException("Invalid number");
                }

                Console.WriteLine(Math.Sqrt(number));
            }
            catch (ArithmeticException a)
            {
                Console.WriteLine(a.Message);
                throw;
            }
            finally
            {
                Console.WriteLine("Good bye");
            }
        }
    }
}