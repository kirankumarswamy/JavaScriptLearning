 

 console.log(`===================Assignment-1=====================`);

 let professor = {
    name : " Albert",
    designation  : "Assistant Professor",
    email :  "albert456@gmail.com",
    qualification : "B.Tech",
    country: "USA",

    degrees :{
        engineering : "CSC",
        masters : "Embeded systems",
        PHD : "Adv Computing",

        concatDegrees : function(){
            return`Teacher degrees : ${this.engineering} , ${this.masters} , ${this.PHD}`;
        }
    },
    certificates:["Hacker Rank praticipation","Certificate in IE course","Certificate in Adv Programming"],
 }
 console.log(professor);
 professor.degrees.concatDegrees()
console.log(``);
 console.log(`added value is : professor experience ${professor.experience = "14 years"}`);
console.log(`----------------------------------------------------------------------`);
 console.table(`Updated experience : ${professor.experience = "20 years"}`);
console.log(``);
console.log(`Added certificate : ${professor.certificates.push("Oracle certificate")}`);

let lastElement = professor.certificates.length;
console.log(`The last element of array certificates is : "${professor.certificates[lastElement-1]}"`);
console.log();