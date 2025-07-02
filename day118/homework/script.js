// 1
class Employee {
    #id;
    #monthSalary;

    constructor(id, firstName, lastName, monthSalary) {
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.monthSalary = monthSalary;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(nameStr) {
        const parts = nameStr.trim().split(" ");
        if (parts.length >= 2) {
            this.firstName = parts[0];
            this.lastName = parts.slice(1).join(" ");
        } else {
            throw new Error(
                "Full name must include at least first and last name."
            );
        }
    }

    get yearSalary() {
        return this.#monthSalary * 12;
    }

    get monthSalary() {
        return this.#monthSalary;
    }

    set monthSalary(value) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error("Month salary must be a positive number.");
        }
        this.#monthSalary = value;
    }

    get id() {
        return this.#id;
    }
}

// 2
class Manager extends Employee {
    constructor(id, firstName, lastName, monthSalary, department) {
        super(id, firstName, lastName, monthSalary);
        this.department = department;
    }

    set changeDepartment([newDept, newSalary]) {
        if (typeof newDept !== "string" || newDept.trim() === "") {
            throw new Error("Invalid department name.");
        }
        if (typeof newSalary !== "number" || newSalary <= 0) {
            throw new Error("Salary must be a positive number.");
        }
        if (newSalary > this.monthSalary) {
            this.department = newDept;
            this.monthSalary = newSalary;
        }
    }

    get yearSalary() {
        return super.yearSalary + 3000;
    }

    info() {
        return `ID: ${this.id}, Name: ${this.fullName}, Department: ${this.department}, Monthly: ${this.monthSalary}, Yearly: ${this.yearSalary}`;
    }
}
