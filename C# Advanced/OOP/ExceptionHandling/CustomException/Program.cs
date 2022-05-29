using System;

namespace CustomException
{
    public class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Student studenet = new Student("4o4i", "4o4ito.abv.bg");
                Console.WriteLine(studenet.Name);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}