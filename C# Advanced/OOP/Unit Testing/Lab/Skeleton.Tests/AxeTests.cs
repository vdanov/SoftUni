using NUnit.Framework;

[TestFixture]
public class AxeTests
{
    Axe axe;
    Dummy dummy;

    [SetUp]

    public void Initializer()
    {
        axe = new Axe(1, 1);
        dummy = new Dummy(10, 10);
    }

    [Test]
    public void AxeLoseDurabilityAfterAttack()
    {
        axe.Attack(dummy);

        Assert.That(axe.DurabilityPoints, Is.EqualTo(0), "Axe durability doesn't change after attack.");
    }

    [Test]
    public void AttackWithBrokenAxe()
    {
        axe.Attack(dummy);

        Assert.That(() => axe.Attack(dummy),
            Throws.InvalidOperationException.With.Message
            .EqualTo("Axe is broken."));
    }
}