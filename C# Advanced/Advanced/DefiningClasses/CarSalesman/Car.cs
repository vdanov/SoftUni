namespace CarSalesman
{
    class Car
    {
        public Car()
        {
            Engine = new Engine();
        }

        public string Model { get; set; }

        public Engine Engine { get; set; }

        public string Weight { get; set; } = "n/a";

        public string Color { get; set; } = "n/a";

    }
}
