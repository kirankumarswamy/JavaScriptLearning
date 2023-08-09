
console.log(`======================================Assignment=2=========================================`);
console.log(`-----------------------------------------------Step-1&2----------------------------------------------------`);

const bankSbi = {
    bankName : "SBI Bank",
    location  : "Bidar",
    accountNo : "39449678902",
    ifsc : "SBIN0002035",
}
console.log(`   Before Cloning Objects are `);
console.log(bankSbi);


const bankLocation = {
    street : "near Deputy Commissioner's Office, Shivaji circle Bidar ",
    city : "Bidar",
    pincode : 585401
}

console.log(bankLocation);

console.log(`-----------------------------------------------Step-3----------------------------------------------------`);

console.log(`   Using Object.assign() For cloning Bank and Location`);

let cloneSbi = Object.assign({},bankSbi)
// cloneSbi.location = "Bengaluru"
console.log(cloneSbi);

let cloneLocation = Object.assign({},bankLocation);
// cloneLocation.city = "Mysore";
console.log(cloneLocation);

console.log(` `);

console.log(`   Using spread operator for Cloning Bank and Location`);
let clonedSbiBank = {...bankSbi}
console.log(clonedSbiBank);

let clonedLocation = {...bankLocation}
console.log(clonedLocation);

console.log(`--------------------------------Step-4---------------------------------`);
console.log(`    Rate Of interest properties`);
const rateOfInterest = {
    homeLoanInterest : "4.8%",
    personalLoanInterest : "5.2%",
    duelInterest : "5.0%"
}
console.log(rateOfInterest);

console.log(`-------------------------------------step-5----------------------------------------`);
console.log(`    Merging step1,step2 and step4 objects into new object sbitDetails`);

let mergedObjects = Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.table(mergedObjects);

console.log(`-------------------------------------step-6----------------------------------------`);
console.log(`-----Traversing Merged object Using for in loop-----`);

for (const value in mergedObjects) {
    if (Object.hasOwnProperty.call(mergedObjects, value)) {
        const element = mergedObjects [value];
        console.log(`Bank details :${value} : ${element}`);
    }
}
