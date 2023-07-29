
console.log(`====================Assignment 1=====================`);
var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
   var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
    ? `Congrats ${candidateName} you are eligible for TCS interview.`
    :  `Unfortunately you are not eligible for interview`;
    console.log(result);
}

interviewEligibility(80, 86, 90, 'Mahi');
interviewEligibility(70, 65, 55, 'Gill');
interviewEligibility(60, 79, 88, 'Stew');


 console.log(`====================Assignment 2=====================`);
 console.log(`====================Step-1=====================`);
 
 function malemarriageEligibility(gender,age,boyName){
    var check = gender && age>=21 ? "You are Eligible for marriage":"You are not eligible for marriage";
    console.log(`Hey "${boyName}" "${check}`);
 }
 malemarriageEligibility("male",25,"Billgates")
 malemarriageEligibility("male",17,"Stew Jobs")

 console.log(`====================Step-2=====================`);

 function femalemarriageEligibility(gender,age,girlName){
    var check = gender && age>=18 ? "You are Eligible for marriage":"You are not eligible for marriage";
    console.log(`Hey "${girlName}" "${check}`);
 }
 femalemarriageEligibility("Female",16,"Jenifer")
 femalemarriageEligibility("Female",27," Malinda Gates")
