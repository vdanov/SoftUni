using MilitaryElite.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Models
{
    public class Spy : ISoldier
    {
        public Spy(string firstName, string lastName, string id, int code)
        {
            FirstName = firstName;
            LastName = lastName;
            ID = id;
            CodeNumber = code;
        }

        public int CodeNumber { get; private set; }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public string ID { get; private set; }

        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {ID} Code Number: {CodeNumber}";
        }
    }
}
