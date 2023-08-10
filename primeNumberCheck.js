

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