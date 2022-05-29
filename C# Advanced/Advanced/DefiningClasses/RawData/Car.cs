namespace RawData
{
    public class Car
    {
        public Car(string model, int speed, int power, int cargoWeight, string cargoType, double tirePressure1, int tireAge1, double tirePressure2, int tireAge2, double tirePressure3, int tireAge3, double tirePressure4, int tireAge4)
        {
            Model = model;

            Engine = new Engine { EngineSpeed = speed, EnginePower = power };
            Cargo = new Cargo { CargoType = cargoType, CargoWeight = cargoWeight };

            Tires tire1 = new Tires();
            Tires tire2 = new Tires();
            Tires tire3 = new Tires();
            Tires tire4 = new Tires();

            tire1.TirePressure = tirePressure1;
            tire1.TireAge = tireAge1;
            tire2.TirePressure = tirePressure2;
            tire2.TireAge = tireAge2;
            tire3.TirePressure = tirePressure3;
            tire3.TireAge = tireAge3;
            tire4.TirePressure = tirePressure4;
            tire4.TireAge = tireAge4;

            Tires = new Tires[4];

            Tires[0] = tire1;
            Tires[1] = tire2;
            Tires[2] = tire3;
            Tires[3] = tire4;
        }

        public string Model { get; set; }

        public Tires[] Tires { get; set; }

        public Engine Engine { get; set; }

        public Cargo Cargo { get; set; }

        public override string ToString()
        {
            return $"{Model}";
        }
    }
}
