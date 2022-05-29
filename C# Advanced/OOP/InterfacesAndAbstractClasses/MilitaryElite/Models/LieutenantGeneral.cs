using MilitaryElite.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Models
{

    public class LieutenantGeneral : Soldier
    {
        public LieutenantGeneral(string firstName, string lastName, decimal salary, string id) : base(firstName, lastName, salary, id)
        {
            Squad = new List<ISoldier>();
        }

        // squad members must refer to instances of type Private !
        public List<ISoldier> Squad { get; set; } // try to make it so no one could add members !

        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {ID} Salary: {Salary:F2}\nPrivates:\n {string.Join(Environment.NewLine + " ", Squad)}";
        }
    }
}
