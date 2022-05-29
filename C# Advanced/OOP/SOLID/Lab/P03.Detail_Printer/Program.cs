using System;
using System.Collections.Generic;

namespace P03.DetailPrinter
{
    class Program
    {
        static void Main()
        {
            Staff Gosho = new Employee("Gosho");
            List<string> docs = new List<string>() { "Some docs", "Some other docs", "Very important docs", "Classified" };
            Staff Petko = new Manager("Petko", docs);

            DetailsPrinter printer = new DetailsPrinter();

            printer.Print(Gosho);

            Console.WriteLine("-----------------");

            printer.Print(Petko);
        }
    }
}