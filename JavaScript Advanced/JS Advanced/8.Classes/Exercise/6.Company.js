class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(Username, Salary, Position, Department) {

        if (typeof Username != 'string' || typeof Salary != 'number' || typeof Position != 'string' || typeof Department != 'string') {
            throw Error('Invalid input!');
        } else if (Username == '' || Position == '' || Department == '' || Salary < 0) {
            throw Error('Invalid input!');
        }

        if (!this.departments.has(Department)) {
            this.departments.set(Department, [{ Username, Salary, Position }]);
        } else {
            this.departments.get(Department).push({ Username, Salary, Position })
        }

        return `New employee is hired. Name: ${Username}. Position: ${Position}`;
    }

    bestDepartment() {
        let max = 0;
        let bestDptmnt = new Map();

        for (const [key, value] of this.departments) {
            let currentSum = 0;

            for (const person of value) {

                currentSum += person.Salary;
            }
            bestDptmnt.set(key, currentSum / value.length)
        }

        let output = [];

        function sorting(a, b) {
            if (a.Salary < b.Salary) {
                return 1;
            } else if (a.Salary > b.Salary) {
                return -1
            } else {
                if (a.Username < b.Username) {
                    return -1;
                } else if (a.Username > b.Username) {
                    return 1
                } else {
                    return 0;
                }
            }
        }

        let sorted = [...bestDptmnt.entries()].sort((a, b) => b[1] - a[1]);

        output.push(`Best Department is: ${sorted[0][0]}`);
        output.push(`Average salary: ${sorted[0][1].toFixed(2)}`)

        this.departments.get(sorted[0][0]).sort((a,b)=> sorting(a,b));
        this.departments.get(sorted[0][0]).forEach(x => { output.push(`${x.Username} ${(x.Salary)} ${x.Position}`); })
        return output.join('\n');
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());