using System;
using System.Collections.Generic;
using System.Text;

namespace ValidPerson
{
    public class Person
    {
        private string firstName;
        private string lastName;
        private int age;

        public Person(string firstName, string lastName, int age)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
        }
        public string FirstName
        {
            get => this.firstName;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException($"{nameof(FirstName)} cannot be empty or null");
                }

                this.firstName = value;
            }
        }


        public string LastName
        {
            get => this.lastName;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException($"{nameof(LastName)} cannot be empty or null");
                }

                this.lastName = value;
            }
        }

        public int Age
        {
            get => this.age;
            private set
            {
                if (value < 0 || value > 120)
                {
                    throw new ArgumentOutOfRangeException($"{nameof(Age)} must be in range [0-120]");
                }

                this.age = value;
            }
        }
    }
}