const arrayNames = ["Stew", "Jenny", "Bill", "Larry", "Vivek"];

arrayNames.sort(); // Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse(); // Sorting in descending order
console.log(arrayNames); 

const arrayNumbers = [34, 3, 5, 11, 21, 7, 9, 12, 42];
arrayNumbers.sort()
console.log(arrayNumbers);


const arrayNums = [34, 3, 5, 11, 21, 9, 42];
arrayNums.sort( (n1, n2) => { // Custom logic to sort array of numbers in ascending order
    return n1>n2 ? 1 : -1;
} );
console.log(arrayNums);
arrayNums.reverse();
console.log(arrayNums);






class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];

  arrayEmployees.sort((emp1, emp2)=> {
    return emp1.emp_salary > emp2.emp_salary ? 1 : -1;
  });

  for (const employee of arrayEmployees) {
    console.log(employee);
  }



