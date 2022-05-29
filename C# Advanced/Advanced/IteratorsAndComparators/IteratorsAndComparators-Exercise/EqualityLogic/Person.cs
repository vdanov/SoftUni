using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace EqualityLogic
{
    public class Person : IComparable<Person>
    {
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }

        public int Age { get; set; }

        public int CompareTo(Person other)
        {
            int result = this.Name.CompareTo(other.Name);

            if (result == 0)
            {
                result = this.Age.CompareTo(other.Age);
            }

            return result;
        }

        public override bool Equals(object obj)
        {
            Person person = (Person)obj;

            if ((obj == null) || !GetType().Equals(person.GetType()))
            {
                return false;
            }
            
            return Name == person.Name && Age == person.Age;
        }

        public override int GetHashCode()
        {
            return this.Name.GetHashCode() / 3 + this.Age * 3;
        }
    }
}