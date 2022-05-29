﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Shapes
{
    public class Rectangle : Shape
    {
        private double width;
        private double height;

        public Rectangle(double width, double height)
        {
            this.width = width;
            this.height = height;
        }
        public override double CalculateArea() => width * height;

        public override double CalculatePerimeter() => 2 * (width + height);

        public override string Draw()
        {
            return base.Draw() + $" {this.GetType().Name}";
        }
    }
}