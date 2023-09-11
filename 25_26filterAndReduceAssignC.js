


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

  console.log(`1) Find all the employees from Wipro company`);
  const wiproEmp = arrayEmployees.filter((Employee)=>{
    return Employee.emp_company === 'Wipro'
  })
  console.table(wiproEmp)
  
  console.log(`2) Employees From IT or HR department`);
 const empOfItOrHr = arrayEmployees.filter((employee)=>{
  return employee.emp_dept ==='IT' || employee.emp_dept==='HR'
 })
 console.table(empOfItOrHr);

console.log(`3) Find all the employees Whose emp_id is greater then 50`);
const idGreater50 = arrayEmployees.filter((employee)=>{
    return employee.emp_id > 50
})
console.table(idGreater50);

console.log(`4) Emloyees Whose name starts With letter 'A' || 'V' || 'M' `);
const nameStartsWith =arrayEmployees.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith('V') ||employee.emp_name.startsWith('M') 
})
console.table(nameStartsWith)

console.log(`=======================================================`);
const totalSalary = arrayEmployees.reduce((total, employee)=>{
 return total + employee.emp_salary
},0)
const avgTotal = totalSalary/arrayEmployees.length
console.log(`5)Average salary of all Employees is = ${avgTotal}`);

console.log(`=======================================================`);

const employeeIt = arrayEmployees.filter((employee)=>{
    return employee.emp_dept === 'IT'
})

const averageSalaryIt = employeeIt.reduce((total,employee)=>{
    return total + employee.emp_salary
},0)
console.log(`6)Average salary of IT department is : ${averageSalaryIt/employeeIt.length}`);