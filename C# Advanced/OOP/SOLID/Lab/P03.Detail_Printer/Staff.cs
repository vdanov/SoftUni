using System;
using System.Collections.Generic;
using System.Text;

namespace P03.DetailPrinter
{
    public abstract class Staff
    {
        public Staff(string name)
        {
            Name = name;
        }

        public string Name { get; }

        public abstract void PrintDetails();
    }
}