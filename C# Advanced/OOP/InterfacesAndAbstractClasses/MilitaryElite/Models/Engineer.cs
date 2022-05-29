using MilitaryElite.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Models
{
    public class Engineer : Soldier, ISpecialisedSoldier
    {
        private string corps;
        public Engineer(string firstName, string lastName, decimal salary, string id) : base(firstName, lastName, salary, id)
        {
            Repairs = new List<Repair>();
            Missions = new List<IMission>();
        }

        public List<Repair> Repairs { get; set; }

        public List<IMission> Missions { get; set; }

        public string Corps
        {
            get => this.corps;
            set
            {
                if (value != "Airforces" && value != "Marines")
                {
                    throw new ArgumentException("Invalid corps");
                }
                this.corps = value;
            }
        }

        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {ID} Salary: {Salary:F2}\nCorps: {Corps}\nRepairs:\n {string.Join(Environment.NewLine + " ", Repairs)}";
        }
    }
}
