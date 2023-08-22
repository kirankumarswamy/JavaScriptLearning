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



let arrayemployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahesh]
arrayemployee.forEach((Element)=>{
    console.log(Element);
})

console.log (`==========================Step=1===========================`);

for (const employee of arrayemployee) {
    if(employee.emp_company == "TCS")    
    console.log(`Employee Name : ${employee.emp_name} Working Company ${employee.emp_company}`);
}

// OR //
// for (const elements in arrayemployee) {
//     const tcsEmp = arrayemployee[elements]
//     if (tcsEmp.emp_company=="TCS") {
//         console.log(`${tcsEmp.emp_name},${tcsEmp.emp_co}`);
//     }
// }

console.log(`==========================Step=2===========================`);
console.log(`Finance department employees`);
for (const employee of arrayemployee) {
    if(employee.emp_dept == "Finance")
    console.log(`emp_name: ${employee.emp_name} | emp_dept: ${employee.emp_dept}`);
}
console.log(`==========================Step=3===========================`);
console.log(`Employee Details Whose name starts with "R"`);
for (const employee of arrayemployee) {
    if (employee.emp_name.startsWith("R") ) {
        console.log(`emp_name: ${employee.emp_name} | emp_id: ${employee.emp_id} | emp_dept: ${employee.emp_dept} | emp_salary: ${employee.emp_salary} | emp_company: ${employee.emp_company}`);
    }
}

console.log(`==========================Step=4===========================`);
console.log(`Employees Having salary grater than 75k are `);
for (const employee of arrayemployee) {
    if (employee.emp_salary > 75000) {
        console.log(`emp_name : ${employee.emp_name} | emp_company: ${employee.emp_company} | emp_salary: ${employee.emp_salary}`);
    }
}

console.log(`==========================Step=5===========================`);
for (const employee of arrayemployee) {
    if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
        console.log(`emp_name: ${employee.emp_name} | emp_id: ${employee.emp_id} | emp_dept: ${employee.emp_dept} | emp_salary: ${employee.emp_salary} | emp_company: ${employee.emp_company}`);
    }    
}

console.log(`==========================Step=6===========================`);

for (const employee of arrayemployee) {
    if (employee.emp_company == "Infy") {
        console.log(`emp_name: ${employee.emp_name} | emp_id: ${employee.emp_id} | emp_dept: ${employee.emp_dept} | emp_salary: ${employee.emp_salary} | emp_company: ${employee.emp_company}`);
    }    
}





