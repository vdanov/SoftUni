using System;

namespace EnterNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            ReadNumber(1, 100);
        }

        public static int ReadNumber(int start, int end)
        {
            int num = 0;

            for (int i = 0; i < 10; i++)
            {
                try
                {
                    num = int.Parse(Console.ReadLine());
                    if (num == 0)
                    {
                        throw new FormatException("A non number has been entered.");
                    }
                    else
                    {
                        try
                        {
                            if (num < start || num > end)
                            {
                                throw new ArgumentException($"Number must be in range [{start}-{end}]");
                            }
                        }
                        catch (ArgumentException ex)
                        {
                            i = -1;
                            Console.WriteLine(ex.Message);
                        }
                    }
                }
                catch (FormatException e)
                {
                    i = -1;
                    Console.WriteLine(e.Message);
                }
            }

            return num;
        }
    }
}