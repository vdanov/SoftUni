using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControl
{
    public class Robot : IIdentifiable
    {
        public string Model { get; set; }
        public string ID { get ; set ; }
        public override string ToString()
        {
            return ID;
        }
    }
}