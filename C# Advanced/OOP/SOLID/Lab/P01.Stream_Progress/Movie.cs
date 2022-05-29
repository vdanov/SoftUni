using System;
using System.Collections.Generic;
using System.Text;

namespace P01.Stream_Progress
{
    public class Movie : Stream
    {
        private int length;
        private int bytesSent;
        private string name;

        public Movie(string name, int len, int bytes) : base(len, bytes)
        {
            this.name = name;
        }
    }
}