using System;

namespace P02.Graphic_Editor
{
    class Program
    {
        static void Main()
        {
            GraphicEditor graph = new GraphicEditor();

            IShape circle = new Circle();
            IShape square = new Square();
            IShape rectangle = new Rectangle();
           
            graph.DrawShape(circle);
            graph.DrawShape(square);
            graph.DrawShape(rectangle);
        }
    }
}