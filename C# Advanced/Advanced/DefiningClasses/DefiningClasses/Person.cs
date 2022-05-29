using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    public class Person
    {
        private string name;
        private int age;

        public Person()
        {
            this.name = "No name";
            this.age = 1;
        }

        public Person(int age) : this()
        {
            this.Age = age;
        }

        public Person(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name
        {
            get { return this.name; }
            set
            {
                if (age > 30)
                {
                    this.name = value;

                }
            }
        }

        public int Age
        {
            get => this.age;
            set
            {
                if (value > 30)
                {
                    this.age = value;
                }
            }
        }
    }
}
