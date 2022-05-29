using System;

namespace FixingVol2
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 86, num2 = 3;

            try
            {
                byte result = Convert.ToByte(num1 * num2);
                Console.WriteLine($"{num1} x {num2} = {result}");
            }
            catch (OverflowException e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}