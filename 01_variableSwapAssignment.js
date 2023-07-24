

////   1
var sweety = 'Sweety';
var cutie = 'Cutie';
console.log('Before swap','sweety =',sweety, 'cutie =', cutie );
var temp = sweety;
sweety = cutie;
cutie = temp;
console.log('After swap','sweety =',sweety, 'cutie =', cutie);
console.log('===============================================');

////  2
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log('Before swap','num1 -',num1,'num2 -',num2, 'num3 -',num3);
var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log('After swap','num1 -',num1,'num2 -',num2, 'num3 -',num3);

console.log('===============================================');


function swap(n1, n2,n3){ // n1, n2 arguments or parameters n1=100   n2=200
    // console.log('Inside swap function');
    console.log('Before Swap=> n1', n1, " n2", n2,'n3', n3 );
    var temp = n1;
    n1 = n2;
    n2 = n3;
    n3 = temp;
    console.log('After Swap=> n1', n1, " n2", n2, 'n3',n3 );
}
var num1 = 100;
var num2 = 200;
var num3 = 300;
swap(num1, num2,num3);// Function call or invocation


