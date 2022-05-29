using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public interface ISoldier
    {
        public string FirstName { get; }

        public string LastName { get; }

        public string ID { get; }
    }
}
