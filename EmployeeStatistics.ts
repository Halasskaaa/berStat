export class EmployeeStatistics {
    constructor (
        public readonly name: string, 
        public readonly age: number, 
        public readonly salary: number
    ) {
        if (name === "") {
            throw new Error("A dolgozók megadása kötelező");
        }
        if (age < 0) {
            throw new Error("Az életkor nem lehet negatív");
        }
        if (salary < 0) {
            throw new Error("A fizetés nem lehet negatív");
        }
    }
}

export function getMaxSalary(employees: EmployeeStatistics[]): number {
    if (employees.length === 0) {
        throw new Error("Nincs dolgozó");
    }
    let maxSalary = employees[0].salary;
    for (const emp of employees) {
        if (emp.salary > maxSalary) {
            maxSalary = emp.salary;
        }
    }
    return maxSalary;
}

export function getAverageAge(employees: EmployeeStatistics[]): number {
    if (employees.length === 0) {
        throw new Error("Nincs dolgozó");
    }
    let totalAge = 0;
    for (const emp of employees) {
        totalAge += emp.age;
    }
    return totalAge / employees.length;
}