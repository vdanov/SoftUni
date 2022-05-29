using System;
using System.Collections.Generic;
using System.Text;

namespace P03.DetailPrinter
{
    public class Employee : Staff
    {
        public Employee(string name) : base(name) { }


        public override void PrintDetails()
        {
            Console.WriteLine(Name);
        }
    }
}