function personCreator(firstName, lastName) {
    const result = {
        firstName,
        lastName,
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            let [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },
        enumerable: true,
        configurable: true
    });
    return result;
}