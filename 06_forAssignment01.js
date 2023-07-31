

console.log(`===============Assignment-1===============`);
console.log(`1)Numbers from 5 to 15 by incrementing 1`);
var result =" ";
for (let index = 5; index <= 15; index++) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);    

console.log(`------------------------------------`);
console.log(`2)Numbers from 50 to 40 by decrementing 1`);
var result =" ";
for (let index = 50; index >= 40; index--) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);    

console.log(`------------------------------------`);
console.log(`3)First 15 odd numbers`);
var result = " "
for (let index = 1; index <30; index= index+2) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);
console.log(`------------------------------------`);


console.log(`4)First 10 even numbers`);
var result = " "
for (let index = 0; index <20; index= index+2) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);
console.log(`------------------------------------`);


console.log(`5)Table of 5`);
var result = " "
for (let index = 5; index <=50; index= index+5) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);

console.log(`------------------------------------`);
console.log(`6)Table of 10`);
var result = " "
for (let index = 10; index <=100; index= index+10) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);
console.log(`------------------------------------`);


console.log(`7)Table of 10 in reverse`);
var result = " "
for (let index = 100; index >=10; index= index-10) {
    result = result.concat(index).concat(" ");
}
console.log(`${result}`);
console.log(`------------------------------------`);



console.log(`Using while loop`);


console.log(`=================Assignment-2=================`);
console.log(`1)Numbers from 5 to 15 by incrementing 1`);
 var i=5;
 while (i<=15) {
    console.log(i);
    i++;
 }

 console.log(`------------------------------------`);
console.log(`2)Numbers from 50 to 40 by decrementing 1`);
 var i = 50;
 while (i>=40) {
    console.log(i);
    i--;
 }

 console.log(`------------------------------------`);
console.log(`3)First 15 odd numbers`);
var i = 1;
while (i<30) {
   console.log(i);
   i+=2 ;
}


console.log(`------------------------------------`);
console.log(`4)First 10 even numbers`);
 var i =0;
 while (i<20) {
    console.log(i);
    i+=2;
 }


 console.log(`------------------------------------`);
console.log(`5)Table of 5`);
 var i =5;
 while (i<=50) {
    console.log(i);
    i+=5;
 }


console.log(`------------------------------------`);
console.log(`6)Table of 10`);
 var i =10;
 while (i<=100) {
    console.log(i);
    i+=10;
 }


 console.log(`------------------------------------`);
console.log(`7)Table of 10 in reverse`);
 var i =100;
 while (i>=10) {
    console.log(i);
    i-=10;
 }
