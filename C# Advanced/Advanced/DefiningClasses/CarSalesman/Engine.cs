﻿using System;
using System.Collections.Generic;

namespace CarSalesman
{
    public class Engine
    {
        public string Model { get; set; }

        public int Power { get; set; }

        public string Displacement { get; set; } = "n/a";

        public string Efficiency { get; set; } = "n/a";

        public override string ToString()
        {
            return  $"{Model}:\n" +
                    $"    Power: {Power}\n" +
                    $"    Displacement: {Displacement}\n" +
                    $"    Efficiency: {Efficiency}";
        }
    }    
}