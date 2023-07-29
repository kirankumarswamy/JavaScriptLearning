
console.log(`--------==========Assignment-2=========--------`);

console.log(`----Eligibility for marriage is-- Male>=21 and Female>=18----`);
console.log(``);
var marriageEligible = function(gender,age){
     if (gender === "female" && age>=18) {
        console.log(`Entered Gender is ${gender}  and age is ${age} and is eligible for marriage `);
    }
    if (gender === "male" && age>=21) {
        console.log(`Entered Gender is ${gender} and age is ${age} and is eligible for marriage`);
    }
    if (gender ==="other"|| typeof gender!=="string" ||typeof age !== 'number' || age<18 || isNaN(age)) {
        console.log(`Entered Gender is "${gender}" and age is ${age} please enter valid input`); 
    }
} 
        
     
        

marriageEligible("male",17);
marriageEligible("male",25);
marriageEligible("female",28);
marriageEligible("female",16);
marriageEligible("other",35);
marriageEligible("other",41);