using System;
using System.Collections.Generic;

namespace CustomRandomList
{
    public class RandomList : List<string>
    {
        public string RandomString()
        {
            Random random = new Random();

            string str = this[random.Next(0, this.Count)];
            this.Remove(str);

            return str;
        }
    }
}
