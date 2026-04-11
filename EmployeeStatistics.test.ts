import { EmployeeStatistics, Employee } from "./EmployeeStatistics";
import { beforeEach, describe, test, expect } from "vitest";

let lista: EmployeeStatistics;

beforeEach(() => {
    const employees: Employee[] = [
        { name: "John Doe", age: 30, salary: 50000 },
        { name: "Jane Smith", age: 25, salary: 60000 },
        { name: "Bob Johnson", age: 40, salary: 55000 }
    ];

    lista = new EmployeeStatistics(employees);
});

describe("EmployeeStatistics", () => {
    test("should create an employee with valid data", () => {
        const emp = new EmployeeStatistics("Alice Brown", 28, 45000);
        expect(emp.name).toBe("Alice Brown");
        expect(emp.age).toBe(28);
        expect(emp.salary).toBe(45000);
    });

    test("should throw error for empty name", () => {
        expect(() => new EmployeeStatistics("", 28, 45000)).toThrow("A dolgozók megadása kötelező");
    });
});
