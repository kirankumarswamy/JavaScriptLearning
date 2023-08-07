

console.log(`===================================================Assignment-1=====================================================`);
console.log(`===================================================Step-1=====================================================`);

class vehicle {
    constructor(vehicleName,model,year,color,engine,price){
        this.vehicleName = vehicleName
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine; 
    this.price = price;
 }
        show(){
            console.log(`Vehicle details : Vehicle Name==>${this.vehicleName}, Model==>${this.model}, Year==>${this.year}, Color==>${this.color}, Engine==>${this.engine}, Price==>${this.price}`);
        }
}

let vehicle1 =new vehicle ("Toyota","4-Runner",2019,"Black","Petrol","20Lakhs")
// console.log(vehicle1);

let vehicle2 =new vehicle ("Honda","Pilot",2010,"White","Diesel","20Lakhs")
// console.log(vehicle2);

let vehicle3 =new vehicle ("Hyundai","Tucson",2019,"White","Petrol","28Lakhs")
// console.log(vehicle3);

let vehicle4 =new vehicle ("Tata","Nexon",2021,"black","Petrol","15Lakhs")
// console.log(vehicle4);

let vehicle5 =new vehicle ("Mahindra","XUV-400V",2020,"Black","Petrol","15Lakhs")
// console.log(vehicle5);

let arrayOfVehicles = [vehicle1,vehicle2,vehicle3,vehicle4,vehicle5]
console.log(`                                             Traversing arrayOfVehicles                                  `);
for (const vehicles of arrayOfVehicles) {
    vehicles.show()
    
}


console.log(`===================================================step-2=====================================================`);

class College {
    constructor(name,estYear,founder,location){
        this.name = name;
        this.estYear = estYear;
        this.founder = founder;
        this.location = location

    }
    display(){
        console.log(`College Detail: College Name :--> ${this.name}, Established year-->${this.estYear}, Foundre-->${this.founder}, Location-->${this.location} `);
    }
}

let college1 = new College("Fergusson College",1885,"B.G.Tilak","Pune")
college1.display()

let college2 = new College("Nizam College",1887,"Syed Hussain Bilgrami","Hyderabad")
college2.display()

let college3 = new College(" Indian Institue Of Science",1909,"Jamsetji tata","Bengaluru")
college3.display()

let college4 = new College("Bharatiya Vidya Bhavan College",1938,"K.M.Munshi","Bengaluru")
college4.display()

//  let arrayOfCollege = [college1,college2,college3,college4]
//  console.log(`                                            Traversing arrayOfCollege                                         `);
//  for (const college of arrayOfCollege) {
//     college.display()
//  } 


console.log(`===================================================step-3=====================================================`);


function traverseObject(collegeDetails){
     let space = []
    for (const key in collegeDetails) {
        if (Object.hasOwnProperty.call(collegeDetails, key)) {
            const element = collegeDetails[key];
            console.log(`${key} : ${element}`);

        }
    }
}
traverseObject(college1)
console.log(`--------------------------------`);
traverseObject(college2)
console.log(`--------------------------------`);
traverseObject(college3)
console.log(`--------------------------------`);
traverseObject(college4)


console.log(`===================================================step-4=====================================================`);

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
                return `Entered number is ${n} & is not prime number`
            }
            
        }
        return`Entered number is ${n} & is prime number `;
         
    }
}
console.log(isprime(11));
console.log(isprime(12));
console.log(isprime(100));
console.log(isprime(29));
console.log(isprime(179));
console.log(isprime(null));
console.log(isprime(1));