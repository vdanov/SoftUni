﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Person
{
    public class Person
    {
        private string name;
        private int age;

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get { return this.name; } set { this.name = value; } }

        public int Age { get { return this.age; } set { this.age = value; } }

        public override string ToString() => $"Name: {Name}, Age: {Age}";
    }
}