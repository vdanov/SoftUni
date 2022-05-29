using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Models
{
    public class IMission
    {
        private string state;

        public string CodeName { get; set; }

        public string State
        {
            get => this.state;
            set
            {
                if (!(value == "inProgress"|| value == "Finished")) // case sensitive ??? 
                {
                    throw new ArgumentException();
                }

                this.state = value;
            }
        }

        public void CompleteMission()
        {
            
        }

        public override string ToString()
        {
            return $" Code Name: {CodeName} State: {State}";
        }
    }
}
