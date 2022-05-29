using System;

namespace Fixing
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] weekdays = new string[5];

            weekdays[0] = "Sunday";
            weekdays[1] = "Monday";
            weekdays[2] = "Tuesday";
            weekdays[3] = "Wednesday";
            weekdays[4] = "Thursday";

            int days = 5;

            for (int i = 0; i <= days; i++)
            {
                try
                {
                    Console.WriteLine(weekdays[i]);
                }
                catch (IndexOutOfRangeException e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }
    }
}