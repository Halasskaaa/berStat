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
});

test("should create statistics with valid data", () => {
    expect(lista).toBeDefined();
});
