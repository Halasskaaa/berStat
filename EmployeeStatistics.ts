export class EmployeeStatistics {
    constructor (
        readonly name: string, 
        age: number, 
        salary: number
    ) {
        if (name === "") {
            throw new Error("Name cannot be empty");
        }
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }
    }
    
}