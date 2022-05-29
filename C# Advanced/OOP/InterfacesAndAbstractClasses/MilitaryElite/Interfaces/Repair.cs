﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Interfaces
{
    public class Repair
    {
        public string PartName { get; set; }

        public int WorkedHours { get; set; }


        public override string ToString()
        {
            return $" Part Name: {PartName} Hours Worked: {WorkedHours}";
        }
    }
}
