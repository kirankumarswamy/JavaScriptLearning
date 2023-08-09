

const arrayNums = [20, 3, 4, 56, 90, 400, 49]

console.log(`--------------------------------------Step-1-------------------------------------`);
console.log(`Given Array is : [${arrayNums}]`);
let clonedArray = arrayNums;
clonedArray.push(55,66)
console.log(`Cloned array With Updated Values is :[${clonedArray}]`);

console.log(`--------------------------------------Step-2-----------------------------------------`);
let deepClone = [...arrayNums]
console.log(`Performed Deep Cloning using Spread operator : [${deepClone}]`);

arrayNums.push(10)
arrayNums.push(25)
console.log(`Updated Original Array with Values 10 & 25 at last Position : [${arrayNums}]`);

console.log(`----------------------------------Step-3----------------------------------------`);
let arrayEven = [2, 30, 14, 8]
console.log(`Given array is : [${arrayEven}]`);
// let mergedArrays = Object.assign({},arrayNums,arrayEven)
// console.log(mergedArrays);

let mergedArrays = [...arrayNums,...arrayEven]
console.log(`After Concatinating with arrayNums Result is : [${mergedArrays}]`);

console.log(`----------------------------Step-4 & 5------------------------------`);

const employee_info = {
        emp_id : 27,
        emp_name : "John Doe",
         
             persoanlInfo : function(){
                console.log(`Employee Name : ${this.emp_name}, Employee ID : ${this.emp_id}`);
            },

        salary : {
            july_month : "4,00,000 INR",
            aug_month : "5,00,000 INR",
            jun_month : "6,50,000 INR",

            empSalarylInfo(){
                console.log(`Employee Salary : june Month->${this.jun_month}, July Month->${this.july_month} ,August Month->${this.aug_month}`);
            }
        },
        address : {
            locality :{
                colony : "OM Vrindavan Society",
                street : "Kanch Pokli, 431202",
                
                showLocality(){
                    console.log(`Locality : Colony->${this.colony}, Strret->${this.street}`);
                },
            },
            city : "Mumbai",
            state : "Maharashtra",
            country : "India",
            
            
            showAddress(){
                console.log(`Address : State->${this.state}, Country->${this.country} `);
            }
        },
        mobiles : ["+91 8600 3456 88", " 1800-4567 32", " +91-9096 5678 77"],

       
}

// employee_info.persoanlInfo(),employee_info.address.locality.showLocality(),employee_info.address.showAddress(),employee_info.salary.empSalarylInfo()
console.log(`Address : ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`);
console.log(`Mobile Numbers : ${employee_info.mobiles}`);

console.log(`-----------------------------Step-6---------------------------------`);

let deepCopy = JSON.parse(JSON.stringify(employee_info))

console.log(`Salary Before Updating : ${employee_info.salary.july_month}`);
// deepCopy.salary.july_month = "80,000"
console.log(`Updated salary of July month for cloned Object is : ${deepCopy.salary.july_month="80,000"}`);
console.log(``);
console.log(`Before Updating Country is : ${employee_info.address.country}`);
// employee_info.address.country = "United Kingdom"
console.log(`Original Object after Updating Country :${employee_info.address.country="United Kingdom"}`);




