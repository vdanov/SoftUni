using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControl
{
    public class Citizen : IIdentifiable
    {     
        public string Name { get; set; }

        public int Age { get; set; }

        public string ID { get; set; }

        public override string ToString()
        {
            return ID;
        }
    }
}