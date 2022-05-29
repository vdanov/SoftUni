using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FootballTeamGenerator
{
    public class Team
    {
        private string name;
        private List<Player> players;

        public Team(string name)
        {
            Name = name;
            players = new List<Player>();
        }

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

        public double Rating => CalculateRating();

        private double CalculateRating()
        {
            double teamRating = 0;

            foreach (var player in players)
            {
                teamRating += player.Stats;
            }

            return players.Count > 0 ? Math.Round(teamRating /= players.Count) : 0;
        }

        public List<Player> Players => this.players;

        public void AddPlayer(Player player)
        {

            players.Add(player);
        }

        public void RemovePlayer(Player player) => players.Where(p => p.Name == player.Name).Select(p => players.Remove(p));
    }
}