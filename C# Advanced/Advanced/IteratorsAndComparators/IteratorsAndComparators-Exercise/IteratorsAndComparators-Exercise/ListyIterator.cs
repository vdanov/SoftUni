using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace IteratorsAndComparators_Exercise
{
    public class ListyIterator<T> : IEnumerable<T>
    {
        private List<T> collection;
        private int index = 0;

        public ListyIterator(params T[] collection)
        {
            this.collection = new List<T>(collection);
            Count = this.collection.Count;
        }

        public int Count { get; private set; }

        public bool Move()
        {
            if (HasNext())
            {
                index++;
                return true;
            }

            return false;
        }

        public bool HasNext() => index + 1 < this.collection.Count ? true : false;

        public void Print()
        {
            if (this.collection.Count != 0)
            {
                Console.WriteLine(this.collection[index]);
            }
            else
            {
                Console.WriteLine("Invalid Operation!");
            }
        }

        public IEnumerator<T> GetEnumerator()
        {
            foreach (var item in collection)
            {
                yield return item;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return collection.GetEnumerator();
        }
    }
}
