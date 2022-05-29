namespace FoodShortage
{
    public class Pet : IInfo
    {
        public string Name { get; set ; }
        public string Birthday { get; set; }
        public int Age { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }

        public override string ToString()
        {
            return Birthday;
        }
    }
}