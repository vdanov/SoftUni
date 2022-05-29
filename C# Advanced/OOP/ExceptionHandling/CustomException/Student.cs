using System;
using System.Linq;

namespace CustomException
{
    public class Student
    {
        private string name;

        public Student(string name, string email)
        {
            Name = name;
            Email = email;
        }
        public string Name
        {
            get => this.name;
            set
            {
                if (!(value.All(x=> char.IsLetter(x))))
                {
                    throw new InvalidPersonNameException();
                }

                this.name = value;
            }
        }

        public string Email { get; set; }

        public class InvalidPersonNameException : Exception
        {
            private const string nameException = "Name contains forbidden characters!";

            public InvalidPersonNameException() : base(nameException)
            {
            }
        }
    }
}