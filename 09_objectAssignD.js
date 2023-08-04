 

 console.log(`===================Assignment-1=====================`);

 let professor = {
    name : " Albert",
    designation  : "Assistant Professor",
    email :  "albert456@gmail.com",
    qualification : "B.Tech",
    country: "USA",

    degrees :{
        engineering : "CSC",
        masters : "MTech",
        PHD : "Adv Computing",

        concatDegrees : function(){
            console.log(`Teacher degrees : ${this.engineering} , ${this.masters} , ${this.PHD}`);
        }
    },
    certificates:["Hacker Rank praticipation","Certificate in IE course","Certificate in Adv Programming"],
 }
 console.log(professor);
 professor.degrees.concatDegrees()

 professor.experience = "14 years"
 console.log(professor);

 professor.experience = "20 years"
 console.log(professor);

professor.certificates.push("Oracle certificate")
console.log(professor);

let lastElement = professor.certificates.length;
console.log(`The last element of array certificates is : "${professor.certificates[lastElement-1]}"`);
console.log();