

console.log(`--------------------------=========================Assignment-1=======================------------------------------------`);
console.log(`------------------------------------------------Step-1----------------------------------------------------------`);
let personalDetails = {
    fullName : "Kirankumar Swamy",
    age : 24,
    gender: "Male",
    garduation : "Bachelor of Engineering",
    phoneNUmber : 8095643752,
    emailId : "kirankumarswamy1411@gmail.com",
    address : "Bidar Karnataka"

}
console.log(personalDetails);

console.log(`------------------------------------------------Step-2----------------------------------------------------------`);

let collegeDetails = {
    collegeName : "GuruNanak Dev Engineering college",
    location : "Bidar,Karnataka",
    fieldOfStudy : "Civil Engineering",
    passOutYear : 2021,
    securedMarks : "67%"
}
console.log(collegeDetails);

console.log(`------------------------------------------------Step-3----------------------------------------------------------`);
let myDetailsMerged = Object.assign({},personalDetails,collegeDetails)
console.table(myDetailsMerged);

console.log(`------------------------------------------------Step-4----------------------------------------------------------`);
console.log(` Creating aaray of my Friends name`);
 let friendsname = ['Guru','Akash','Vaibhav','Sachin']
 console.log(` Friends Name : ${friendsname}`);
 Object.freeze(friendsname)
//  friendsname.push("amar")
//  console.log(` Friends Name : ${friendsname}`);

console.log(`------------------------------------------------Step-5----------------------------------------------------------`);
console.log(`Using for loop, Loging Frinds Name on Console`);
for (const friends of friendsname) {
    console.log(`Friend name : ${friends}`);
    
}

console.log(`------------------------------------------------Step-6----------------------------------------------------------`);
//console.log(`Using Spread operator ,string reverse`);
// console.log(`Given string is : "Technology"`);
// const str = "Technology"
// const reverseStr = [...str].reverse().join("");
// console.log(reverseStr);

                  // OR //
 console.log(`Using  for loop , reversing string`);
console.log(`Given string is : "Technology"`);
 const string = "Technology"
 let reversedString  = "";
 for (let i = string.length-1; i >= 0; i--) {
  reversedString  += string[i]
 }
 console.log(`Reversed string is : "${reversedString}"`);

                  // OR //
// console.log(`Using while Loop and substring() method`);
// console.log(`Given string is : "Technology"`);
// let str = "Technology"
// let strReversed = " ";
// let i = str.length-1;
// while(i>=0){
//     strReversed += str.substring(i,i+1);
//     i--
// }
// console.log(`Reversed string is : "${strReversed}"`);

                 // OR //

// let company  = "Codemind Technology";
// let seperate = company.split(" ");
// console.log(seperate);

// let reverseWord = seperate[1];
// let finalReverse="";
// for (let i = reverseWord.length-1; i >=0; i--) {
// finalReverse +=reverseWord[i]    
// }
// console.log(finalReverse);
