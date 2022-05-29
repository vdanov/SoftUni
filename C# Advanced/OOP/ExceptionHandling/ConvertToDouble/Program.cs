using System;


namespace ConvertToDouble
{
    class Program
    {
        static void Main(string[] args)
        {
            string number = Console.ReadLine();

            try
            {
                double realNum = Convert.ToDouble(number);
            }
            catch (FormatException fe)
            {
                Console.WriteLine(fe.Message);
            }
            catch (InvalidCastException ice)
            {
                Console.WriteLine(ice.Message);
            }
            catch (OverflowException oe)
            {
                Console.WriteLine(oe.Message);
            }
        }
    }
}