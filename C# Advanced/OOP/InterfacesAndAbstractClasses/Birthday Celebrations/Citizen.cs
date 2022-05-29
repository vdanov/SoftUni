namespace BirthdayCelebrations
{
    public class Citizen : IIdentifiable, IInfo, IBuyer
    {
        public string Name { get; set; }

        public int Age { get; set; }

        public string ID { get; set; }

        public string Birthday { get ; set ; }

        public int Food { get; protected set; };

        public void BuyFood()
        {
            Food += 10;
        }

        public override string ToString()
        {
            return Food.ToString();
        }
    }
}