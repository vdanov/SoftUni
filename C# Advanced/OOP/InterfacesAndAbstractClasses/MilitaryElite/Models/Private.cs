using MilitaryElite.Interfaces;

namespace MilitaryElite.Models
{
    public class Private : Soldier
    {
        public Private(string firstName, string lastName, decimal salary, string id) : base(firstName, lastName, salary, id)
        {
        }
        public override string ToString()
        {
            return $"Name: {FirstName} {LastName} Id: {ID} Salary: {Salary:F2}";
        }
    }
}
