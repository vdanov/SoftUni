using System;

namespace P01.Stream_Progress
{
    public class Program
    {
        static void Main()
        {
            Stream data = new File("Vinyl collection", 5, 1);
            Music classic = new Music("Linkin Park", "LP", 76, 2);
            File files = new File("data", 3, 2);
            Movie titanic = new Movie("Titanic", 2, 5);
            StreamProgressInfo stream = new StreamProgressInfo(titanic);

            Console.WriteLine(stream.CalculateCurrentPercent());
        }
    }
}