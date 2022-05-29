using MilitaryElite.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Interfaces
{
    public abstract class Soldier : ISoldier, IPrivate
    {
        public Soldier(string firstName, string lastName, decimal salary, string id)
        {
            FirstName = firstName;
            LastName = lastName;
            Salary = salary;
            ID = id;
        }
        public decimal Salary { get; private set; }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public string ID { get; private set; }

    }
}