class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.filter(x => x.name == name).length > 0) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {

        if (this.listOfParticipants.some(x => x.name == name)) {
            let index = this.listOfParticipants.findIndex(x => x.name == name)
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        } else {
            throw Error (`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let player1 = this.listOfParticipants.filter(x => x.name == participant1)[0];
        let player2 = this.listOfParticipants.filter(x => x.name == participant2)[0];

        if (typeOfGame == 'Battleship') {
            if (!player1) {
                throw Error('Invalid entered name/s.');
            }

            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame == 'WaterBalloonFights') {
            if (!player2) {
                return 'Invalid entered name/s.';
            }

            if (player1.condition != player2.condition) {
                throw Error ('Choose players with equal condition.');
            }

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            } else if (player1.power < player2.power) {
                player2.wins += 1;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`
            }
        }
    }

    toString() {
        let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        this.listOfParticipants.forEach(x => output += `${x.name} - ${x.condition} - ${x.power} - ${x.wins}\n`);
        return output.trim();
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));
