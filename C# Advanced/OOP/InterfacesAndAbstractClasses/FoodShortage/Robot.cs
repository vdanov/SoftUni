namespace FoodShortage
{
    public class Robot : IIdentifiable
    {
        public string Model { get; set; }
        public string ID { get; set; }

        public override string ToString()
        {
            return ID;
        }
    }
}