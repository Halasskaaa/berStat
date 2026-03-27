import {EmployeeStatistics, getMaxSalary, getAverageAge, getHighestPaidEmployee} from "./EmployeeStatistics.js";
import { beforeEach, describe, test, expect } from "vitest";

let lista: EmployeeStatistics[];

beforeEach(() => {
    lista = [
        new EmployeeStatistics("John Doe", 30, 50000),
        new EmployeeStatistics("Jane Smith", 25, 60000),
        new EmployeeStatistics("Bob Johnson", 40, 55000)
    ];
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