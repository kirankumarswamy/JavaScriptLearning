

console.log('===== Step1:Function with no Arguments=====');
function noArguments(){
    console.log( "HELLO");
    console.log('WORLD');

}
noArguments();

console.log('======== Step2:Personal Details========');

function personalDetails (firstName,lastName,collegeName){
    firstName = 'Kirankumar';
    lastName = "swamy";
    collegeName = "Gurunanak Dev Engg. College Bidar"
console.log("First name =",firstName);
console.log('Last name =',lastName);
console.log('College name =',collegeName);

}
personalDetails();


console.log('========== Step3:Swapping Values==========');

function swapValues(val1,val2){
    console.log('Before Swap=> Val1-->',val1 , " val2-->", val2 );
    var temp = val1;
    val1=val2;
    val2=temp;
    console.log('After Swap=> Val1-->',val1 , " val2-->", val2 );

}
var val1="Virat";
var val2="Anushka";
var num1=1000;
var num2=2000;
swapValues(val1,val2);
swapValues(num1,num2)

console.log('======== Step4 Adding three values========');

function addThreeValues(value1,value2,value3){
    console.log('Values are: ', value1, value2,value3);
   var addition = value1 + value2+value3;
   return addition;
}
var addition = addThreeValues(10.23,600,40)
console.log('After Addition:',addition);
var greet = addThreeValues("HELLO","GOOD","MORNING")
console.log('After Addition:',greet);


console.log('========== Step5:Bank Details==========');
function bankdetails(bankName,accountNumber,location,pinCode){
    bankName = "CITI Bank";
    accountNumber = 3456782345;
    location = "Pune";
    pinCode = 431202;
    console.log("Bank Name is:",bankName,'   ',"Account Number is:",accountNumber,'   ',"Location:",location,'   ',"Pin Code:",pinCode)
    bankName = "Axis Bank";
    accountNumber = 7856782345;
    location = "Mumbai";
    pinCode = 441202;
    console.log("Bank Name is:",bankName,'   ',"Account Number is:",accountNumber,'   ',"Location:",location,' ',"Pin Code:",pinCode)
    bankName = "HDFC Bank";
    accountNumber = 8956782345;
    location = "Pune";
    pinCode = 631202;
    console.log("Bank Name is:",bankName,'   ',"Account Number is:",accountNumber,'   ',"Location:",location,"   ","Pin Code:",pinCode )
}
bankdetails();

