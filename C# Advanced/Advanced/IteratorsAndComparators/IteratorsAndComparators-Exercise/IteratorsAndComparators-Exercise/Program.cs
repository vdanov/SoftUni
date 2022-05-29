using System;
using System.Collections.Generic;
using System.Linq;

namespace IteratorsAndComparators_Exercise
{
    class Program
    {
        static void Main(string[] args)
        {
            var listCreator = Console.ReadLine().Split(new string[] { "Create", " " }, StringSplitOptions.RemoveEmptyEntries);

            ListyIterator<string> list = new ListyIterator<string>(listCreator);

            string command = string.Empty;

            while ((command = Console.ReadLine()) != "END")
            {
                switch (command)
                {
                    case "Move":
                        Console.WriteLine(list.Move()); break;
                    case "Print":
                        list.Print(); break;
                    case "HasNext":
                        Console.WriteLine(list.HasNext()); break;
                    case "PrintAll":

                        foreach (var item in list)
                        {
                            Console.Write(item + " ");
                        }

                        Console.WriteLine();
                        break;
                }
            }
        }
    }
}