﻿using System;

namespace AnimalFarm.Models
{
    public class Chicken
    {
        private const int MinAge = 0;
        private const int MaxAge = 15;

        private string name;
        private int age;

        public Chicken(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException($"{nameof(Name)} cannot be empty.");
                }
                this.name = value;
            }
        }

        public int Age
        {
            get
            {
                return this.age;
            }

            private set
            {
                if (value < 0 || value > 15)
                {
                    throw new ArgumentException("Age should be between 0 and 15.");
                }

                this.age = value;
            }
        }

        public double ProductPerDay
        {
			get
			{				
				return this.CalculateProductPerDay();
			}
        }

        private double CalculateProductPerDay() => Age switch
        {
           var x when x >= 0 && x < 4 => 1.5,
           var x when x >= 4 && x < 8 => 2,
           var x when x >= 8 && x < 12 => 1,
            _ => 0.75
        };
    }
}