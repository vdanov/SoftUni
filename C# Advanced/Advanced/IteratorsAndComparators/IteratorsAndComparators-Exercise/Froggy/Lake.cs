using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Froggy
{
    public class Lake : IEnumerable
    {
        private int[] lake;

        public Lake(params int[] stones)
        {
            lake = stones;
        }

        public IEnumerator GetEnumerator()
        {
            for (int i = 0; i < lake.Length; i++)
            {
                if (i % 2 == 0)
                {
                    yield return lake[i];
                }
            }

            for (int j = lake.Length - 1; j >= 0; j--)
            {
                if (j % 2 != 0)
                {
                    yield return lake[j];
                }
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return lake.GetEnumerator();
        }
    }
}
