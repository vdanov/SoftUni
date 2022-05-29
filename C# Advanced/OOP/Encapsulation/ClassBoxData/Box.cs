using System;
using System.Collections.Generic;
using System.Text;

namespace ClassBoxData
{
    public class Box
    {
        private double length;
        private double width;
        private double height;

        public Box(double length, double width, double height)
        {
            Length = length;
            Width = width;
            Height = height;
        }

        public double Length
        {
            get => this.length;
            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException($"{nameof(Length)} cannot be zero or negative.");
                }

                this.length = value;
            }
        }

        public double Width
        {
            get => this.width;
            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException($"{nameof(Width)} cannot be zero or negative.");
                }

                this.width = value;
            }
        }

        public double Height
        {
            get => this.height;
            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException($"{nameof(Height)} cannot be zero or negative.");
                }

                this.height = value;
            }
        }

        public string GetVolume ()
        {
            return $"Volume - {(Length * Width * Height):F2}";
        }

        public string GetSurfaceArea()
        {
            return $"Surface Area - {(2 * (Length * Width) + 2 * (Length * Height) + 2 * (Width * Height)):F2}";
        }

        public string GetLateralSurfaceArea()
        {
            return $"Lateral Surface Area - {(2 * (Length * Height) + (2 * (Width * Height))):F2}";
        }
           //Lateral Surface Area = 2lh + 2wh
           //Surface Area = 2lw + 2lh + 2wh
           //Volume = lwh
    }
}
