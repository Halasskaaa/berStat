export interface Employee {
    name: string;
    age: number;
    salary: number;
}

export class EmployeeStatistics {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        if (!employees || employees.length === 0) {
            throw new Error("A dolgozók megadása kötelező");
        }
        this.employees = employees;
    }

    getMaxSalary(): number {
        let maxSalary = this.employees[0].salary;

        for (const emp of this.employees) {
            if (emp.salary > maxSalary) {
                maxSalary = emp.salary;
            }
        }

        return maxSalary;
    }

    getAverageAge(): number {
        let totalAge = 0;

        for (const emp of this.employees) {
            totalAge += emp.age;
        }

        return totalAge / this.employees.length;
    }

    getHighestPaidEmployee(): Employee {
        let highest = this.employees[0];

        for (const emp of this.employees) {
            if (emp.salary > highest.salary) {
                highest = emp;
            }
        }

        return highest;
    }

    countEmployeesOverSalary(salary: number): number {
        let count = 0;

        for (const emp of this.employees) {
            if (emp.salary > salary) {
                count++;
            }
        }

        return count;
    }
}
