using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace P03.DetailPrinter
{
    public class Manager : Staff
    {
        public Manager(string name, ICollection<string> documents) : base(name)
        {
            this.Documents = new List<string>(documents);
        }

        public IReadOnlyCollection<string> Documents { get; set; }

        public override void PrintDetails()
        {
            Console.WriteLine(this.Name);
            Documents.ToList().ForEach(Console.WriteLine);
        }
    }
}