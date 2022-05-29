using System;

namespace AuthorProblem
{
    [Author("Ventsi")]

    class StartUp
    {
        [Author("Petko")]

        static void Main(string[] args)
        {
            Tracker tracker = new Tracker();

            tracker.PrintMethodsByAuthor();
        }

        [Author("Vladi")]
        public static void GetSum() { }
    }
}
