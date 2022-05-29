class Bank {
    #name;

    constructor(name) {
        this.#name = name;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let isCustomerPresent = this.allCustomers.some(c => c.personalId == customer.personalId);

        if (isCustomerPresent) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            this.allCustomers.push(customer);
            return customer;
        }
    };

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if (!customer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        if (!customer.transactions) {
            customer.transactions = [];
        }

        if (customer.totalMoney) {
            customer.totalMoney += Number(amount);
        } else {
            customer.totalMoney = Number(amount);
        }

        customer.transactions.push({
            count: `${customer.transactions.length + 1}`,
            names: `${customer.firstName} ${customer.lastName}`,
            type: 'made deposit of',
            amount: amount
        });

        return `${customer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (!customer.transactions) {
            customer.transactions = [];
        }

        if (!(customer.totalMoney) || customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;

        customer.transactions.push({
            count: `${customer.transactions.length + 1}`,
            names: `${customer.firstName} ${customer.lastName}`,
            type: 'withdrew',
            amount: amount
        });

        return `${customer.totalMoney}$`
    };

    customerInfo(personalId) {
        let customer = this.allCustomers.find(c => c.personalId == personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        let output = '';

        output += `Bank name: ${this.#name}\n`;
        output += `Customer name: ${customer.firstName} ${customer.lastName}\n`;
        output += `Customer ID: ${customer.personalId}\n`;
        output += `Total Money: ${customer.totalMoney}$\n`;
        output += `Transactions:\n`;
        customer.transactions.sort((a, b) => b.count - a.count);

        customer.transactions.forEach(c => output += `${c.count}. ${c.names} ${c.type} ${c.amount}$!\n`)
        return output.substring(0, output.length - 1);
    };
}