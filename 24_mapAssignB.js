console.log(``);
class employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;
}
}

const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new employee(33, "Radha", "HR", 740000, "Wipro")
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro")
const emp_vinay = new employee(88, "Vinay", "IT", 75000, "TCS")
const emp_mahesh = new employee(99, "Mahesh", "HR", 85000, "Infy")

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahesh]
console.log(`1) List of Employee Names`);
const empNames = arrayEmployee.map((currentValue)=>{
    return currentValue.emp_name
})
console.log(empNames);
console.log(`----------------------------------------------------`);

console.log(`2)List Of departments`);
const empDeptNames = arrayEmployee.map((currentValue)=>{
    return currentValue.emp_dept
})
console.log(empDeptNames);
console.log(`----------------------------------------------------`);

console.log(`3)List Of Employee Id's`);
const empIds = arrayEmployee.map((currentValue)=>{
    return currentValue.emp_id
})
console.log(empIds);