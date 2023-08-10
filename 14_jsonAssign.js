

let employeeDetailsStr = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street": "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Australia"
    },
    "reffered-by" : "E0012"
}`
 console.log(employeeDetailsStr);

 console.log(`=================================Step=1===================================`);
 let employeeDetails = JSON.parse(employeeDetailsStr)
//  console.table(employeeDetails);
 console.log(`Type of employeeDetails is : ${typeof employeeDetails}`);

 console.log(`=================================Step=2===================================`);

 let employeeRole = employeeDetails.role
for (const role of employeeRole) {
    if (role == "Dev") {
        console.log(`The role is : ${role}`);   
    }
}

console.log(`=================================Step=3===================================`);
let [first,last]  = employeeDetails.name.split(" ")
console.log(`The Last Name is : ${last}`);
                     // OR //
//   let name = employeeDetails.name;
//      let res = name.split(' ');
//     let lastName = res[res.length - 1];
//     console.log("Last Name:", lastName);                 

console.log(`=================================Step=4===================================`);
let yearOfJoining  = employeeDetails.doj
console.log(`Joining date and year : ${yearOfJoining}`);

let doj = employeeDetails.doj;
let year = doj.split('-')[2]; 
console.log("Joining Year:", year);

console.log(`==================================Assignment=2==================================`);

console.log(`//Program to check if entered number is prime or not//`)   

function isprime (n){
    if (n===1) {
        return `You entered 1 & is not prime number`
    }
    else if (n===2){
        return `Is prime`
    }
    else {
        for (let x = 2; x < n; x++) {
            if (n%x===0) {
                return `Entered number is ${n} & it is not prime number`
            }
            
        }
        return`Entered number is ${n} & it is prime number `;
         
    }
}
console.log(isprime(11));
console.log(isprime(21));
