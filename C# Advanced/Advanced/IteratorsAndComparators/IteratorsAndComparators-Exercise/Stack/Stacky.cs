using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Stack
{
    public class Stacky<T> : IEnumerable<T>
    {
        private List<T> stacky;
        private int index;

        public Stacky(params T[] collection)
        {
            stacky = new List<T>(collection);
            index = collection.Length-1;
        }

        public void Push(T element)
        {
            stacky.Add(element);
            index++;
        }

        public void Pop()
        {
            if (index < 0)
            {
                Console.WriteLine("No elements");
            }
            else
            {
                stacky.RemoveAt(stacky.Count-1);
                index--;
            }
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = stacky.Count - 1; i >= 0; i--)
            {
               yield return stacky[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return stacky.GetEnumerator();
        }
    }
}