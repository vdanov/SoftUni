using System;
using System.Collections.Generic;
using System.Text;

namespace P01.Stream_Progress
{
    public abstract class Stream
    {
        public Stream(int len, int bytes)
        {
            Length = len;
            BytesSent = bytes;
        }

        public int Length { get; }

        public int BytesSent { get; }
    }
}