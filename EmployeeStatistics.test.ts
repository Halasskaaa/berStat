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
    test("should throw error when list is empty", () => {
        expect(() => new EmployeeStatistics([]))
            .toThrow("A dolgozók megadása kötelező");
    });
    
    test("should create statistics with valid data", () => {
        expect(lista).toBeDefined();
        });
});


describe("getMaxSalary", () => {
    test("should return max salary", () => {
        expect(lista.getMaxSalary()).toBe(60000);
    });
    
    test("different dataset", () => {
        const stats = new EmployeeStatistics([
            {name: "A", age: 20, salary: 1000},
            {name: "B", age: 30, salary: 5000}
        ]);
        expect(stats.getMaxSalary()).toBe(5000);
    });
});

describe("getAverageAge", () => {
    test("should calculate correct average", () => {
        expect(lista.getAverageAge()).toBe((30 + 25 + 40) / 3);
    });
    
    test("different dataset", () => {
        const stats = new EmployeeStatistics([
            {name: "A", age: 20, salary: 1000},
            {name: "B", age: 30, salary: 5000}
        ]);
        
        expect(stats.getAverageAge()).toBe(30);
    });
});



























