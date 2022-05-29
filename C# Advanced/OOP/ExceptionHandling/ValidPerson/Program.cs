using System;

namespace ValidPerson
{
    public class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Person person = new Person("Vladimir", "Danov", 124214);
            }
            catch (ArgumentNullException ane)
            {
                Console.WriteLine(ane.Message);
            }
            catch (ArgumentOutOfRangeException are) 
            {
                Console.WriteLine(are.Message);
            }

        }
    }
}