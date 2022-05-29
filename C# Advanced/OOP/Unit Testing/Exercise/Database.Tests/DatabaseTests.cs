using NUnit.Framework;

namespace Tests
{
    public class DatabaseTests
    {
        private Database.Database database;

        [SetUp]
        public void Setup()
        {
            database = new Database.Database(1, 2, 3);
        }

        [Test]

        public void CorrectCapacity()
        {
            Assert.AreEqual(16, database.Count);
        }

        [Test]

        public void IncorrectCapacity()
        {
            Assert.That(() => new Database.Database(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17),
                Throws.InvalidOperationException.With.Message.EqualTo("Array's capacity must be exactly 16 integers!"));
        }

        [Test]
        public void AddingSequentially()
        {
            int position = database.Count - 1;
            database.Remove();
            database.Remove();
            database.Add(1);

            Assert.AreEqual(position, database.Count);
        }

        [Test]
        public void RemoveWhenEmpty()
        {
            Assert.That(() => database.Remove(), Throws.InvalidOperationException.With.Message.EqualTo("The collection is empty!"));
        }

        [Test]
        public void RemovingSequentially()
        {
            int position = database.Count - 1;
            database.Remove();
            Assert.AreEqual(position, database.Count);
        }
    }
}