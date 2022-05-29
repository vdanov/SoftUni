function ticketManagement(data, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let index = 0; index < Object.entries(data).length; index++) {

        let ticketData = Object.entries(data)[index][1].split('|');
        tickets.push(new Ticket(ticketData[0], Number(ticketData[1]), ticketData[2]));
    }

    function ticketSorter(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

    switch (criteria) {
        case 'destination':
            tickets.sort((a, b) => ticketSorter(a.destination, b.destination));
            break;
        case 'price':
            tickets.sort((a, b) => ticketSorter(a.price, b.price));
            break;
        case 'status':
            tickets.sort((a, b) => ticketSorter(a.status, b.status));
    }

    return tickets;
}
console.log(ticketManagement(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));