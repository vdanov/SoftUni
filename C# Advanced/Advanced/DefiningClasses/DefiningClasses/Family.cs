using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DefiningClasses
{
    class Family
    {
        private List<Person> people;

        public Family()
        {
            people = new List<Person>();
        }

        public void AddMember(Person person) => this.people.Add(person);

        public Person GetOldestMember() => this.people.OrderByDescending(p => p.Age).FirstOrDefault();
    }
}
