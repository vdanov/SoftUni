using System;

namespace ClassBoxData
{
    class Program
    {
        static void Main(string[] args)
        {
            double length = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double heigth = double.Parse(Console.ReadLine());

            try
            {
                Box box = new Box(length, width, heigth);
                
                Console.WriteLine(box.GetSurfaceArea());
                Console.WriteLine(box.GetLateralSurfaceArea());
                Console.WriteLine(box.GetVolume());
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            

          
        }
    }
}
