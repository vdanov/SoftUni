using System;

namespace DateModifier
{
    class StartUp
    {
        static void Main(string[] args)
        {
            DateTime firstDate = DateTime.Parse(Console.ReadLine());
            DateTime secondDate = DateTime.Parse(Console.ReadLine());

            TimeSpan diff = secondDate.Subtract(firstDate);

            Console.WriteLine(Math.Abs(diff.Days));
        }
    }
}
