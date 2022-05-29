using System;
using System.Collections.Generic;
using System.Text;

namespace FootballTeamGenerator
{
    public class Player
    {
        private string name;
        private double stats;
        private int endurance;
        private int sprint;
        private int dribble;
        private int passing;
        private int shooting;

        public Player(string name, int endurance, int sprint, int dribble, int passing, int shooting)
        {
            Name = name;
            Endurance = endurance;
            Sprint = sprint;
            Dribble = dribble;
            Passing = passing;
            Shooting = shooting;

            this.stats = CalculateStats();
        }

        Func<int, bool> skillValidator = a => a < 0 || a > 100;

        public int Endurance { get => this.endurance; private set {ArgumentThrower(skillValidator, value); this.endurance = value; } }

        public int Sprint { get => this.sprint; private set { ArgumentThrower(skillValidator, value); this.sprint = value; } }

        public int Dribble { get => this.dribble; private set { ArgumentThrower(skillValidator, value); this.dribble = value; } }

        public int Passing { get => this.passing; private set { ArgumentThrower(skillValidator, value); this.passing = value; } }

        public int Shooting { get => this.shooting;  private set { ArgumentThrower(skillValidator, value); this.shooting = value; } }

        public string Name
        {
            get => this.name;
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("A name should not be empty.");
                }
                this.name = value;
            }
        }

        private void ArgumentThrower(Func<int, bool> func, int value) 
        {
            if (skillValidator(value))
            {
                throw new ArgumentException($"{nameof(Endurance)} should be between 0 and 100.");
            }
        } 

        public double Stats => this.stats;

        private double CalculateStats() => Math.Round((this.endurance + this.sprint + this.dribble + this.passing + this.shooting) / 5.0);
    }
}