using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite.Models
{
    public interface ISpecialisedSoldier : ILieutenantGeneral
    {
        public string Corps { get; }
    }
}
