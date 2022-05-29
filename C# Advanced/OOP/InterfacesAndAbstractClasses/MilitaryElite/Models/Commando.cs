using MilitaryElite.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Models
{
    public class Commando : Soldier, ISpecialisedSoldier
    {
        private string corps;

        public Commando(string firstName, string lastName, decimal salary, string id) : base(firstName, lastName, salary, id)
        {
            Missions = new List<IMission>();
            Repairs = new List<Repair>();
        }

        public List<IMission> Missions { get; set; }
        public List<Repair> Repairs { get; set; }
        public string Corps { get => this.corps; 
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
            return $"Name: {FirstName} {LastName} Id: {ID} Salary: {Salary:F2}\nCorps: {Corps}\nMissions:\n {string.Join(Environment.NewLine + " ", Missions)}";
        }
    }
}
