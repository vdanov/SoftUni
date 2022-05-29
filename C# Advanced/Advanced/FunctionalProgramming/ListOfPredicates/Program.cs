using System;
using System.Collections.Generic;
using System.Linq;

namespace ListOfPredicates
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = ArrayCreator();

            int[] dividers = Console.ReadLine().Split().Select(int.Parse).ToArray();


            Func<int[], int[], List<int>> divisibleFinder = (array, dividers) =>
            {
                List<int> sorted = new List<int>();

                for (int i = 0; i < array.Length; i++)
                {
                    bool flag = true;

                    for (int j = 0; j < dividers.Length; j++)
                    {
                        if (dividers[j] == 1)
                        {
                            continue;
                        }

                        if (array[i] % dividers[j] != 0)
                        {
                            flag = false;
                        }
                    }

                    if (flag)
                    {
                        sorted.Add(array[i]);
                    }
                }

                return sorted;
            };

            Console.WriteLine(string.Join(" ", divisibleFinder(array, dividers)));
        }

        private static int[] ArrayCreator()
        {
            int len = int.Parse(Console.ReadLine());

            int[] array = new int[len];

            for (int i = 0; i < array.Length; i++)
            {
                array[i] = i + 1;
            }

            return array;
        }
    }
}
