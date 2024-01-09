class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmployeeGroup {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }
}

class EmployeeIterator {
  #employees;
  #currentIndex;

  constructor(employeeGroup) {
    this.#employees = employeeGroup.employees;
    this.#currentIndex = 0;
  }

  #hasNext() {
    return this.#currentIndex < this.#employees.length;
  }

  next() {
    if (this.#hasNext()) {
      const employee = this.#employees[this.#currentIndex];
      this.#currentIndex++;
      return employee;
    }
    return null;
  }

  list() {
    return this.#employees.map(employee => employee.name).join(', ');
  }
}

console.log("Завдання 7 ====================================");

const employeeGroup = new EmployeeGroup();

employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

const employeeIterator = new EmployeeIterator(employeeGroup);

console.log(employeeIterator.list());
