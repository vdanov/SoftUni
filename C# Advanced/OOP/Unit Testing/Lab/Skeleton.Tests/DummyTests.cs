using NUnit.Framework;

[TestFixture]
public class DummyTests
{
    Axe axe;
    Dummy dummy;

    [SetUp]
    public void Initializer()
    {
        axe = new Axe(11, 1);
        dummy = new Dummy(10, 10);
    }

    [Test]
    public void DummyLosesHealthIfAttacked()
    {
        dummy.TakeAttack(1);
        Assert.That(dummy.Health, Is.EqualTo(9), "Health doesn't decrease with 1 after hit.");
    }

    [Test]

    public void ThrowsExceptionIfAttackedDead()
    {
        dummy.TakeAttack(11);
        Assert.That(() => dummy.TakeAttack(11),
            Throws.InvalidOperationException.With.Message.EqualTo("Dummy is dead."));
    }

    [Test]

    public void AliveDummyCannotGiveXP() 
    {
        Assert.That(() => dummy.GiveExperience(), Throws.InvalidOperationException.With.Message.EqualTo("Target is not dead."));
    }

    [Test]

    public void DeadDummyCanGiveXP()
    {
        axe.Attack(dummy);
        Assert.That(() => dummy.GiveExperience(), Is.EqualTo(10));
    }
}