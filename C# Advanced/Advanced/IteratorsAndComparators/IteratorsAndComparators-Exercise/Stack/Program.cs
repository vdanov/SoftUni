using System;
using System.Collections.Generic;

namespace Stack
{
    class Program
    {
        static void Main(string[] args)
        {
            var create = Console.ReadLine().Split(new string[] { "Push", "," , " " }, StringSplitOptions.RemoveEmptyEntries);
            Stacky<string> stacks = new Stacky<string>(create);
            string[] input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);

            while (input[0] != "END")
            {
                switch (input[0])
                {
                    case "Push":
                        stacks.Push(input[1]);
                        break;
                    case "Pop":
                        stacks.Pop();
                        break;
                    default:
                        break;
                }
                
                input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            }

            foreach (var item in stacks)
            {
                Console.WriteLine(item);
            }

            foreach (var item in stacks)
            {
                Console.WriteLine(item);
            }
        }
    }
}