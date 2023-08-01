
console.log(`------==========Assignment-1==========-------`);
console.log(`1)----Number Of vowels in given string----`);
function vowelsCount(str) {
    let result = " ";
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index)
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            result = result.concat(char).concat(", ")
            count = count+1;

        }
    }
    console.log(`vowels are: ${result}`);
    console.log(`Total number of vowels are: ${count}`);

}
console.log(`"I am very good IT Developer"`);
vowelsCount("I am very good IT Developer")


console.log(`2)------======Sum of cube=======------`);

    function sumOfCube (){
        let totalSum = 0
        for (let index = 1; index <=5; index++) {
            totalSum = totalSum + index * index * index;
        }
        console.log(`Sum of cube of numbers from 1 to 5 is = ${totalSum}`);
    }
    sumOfCube()

    console.log(`3)----==odd positioned characters==----`);
    function oddPositionedChars(str){
        let result = " ";
        let count = 0
        for (let index = 0; index < str.length; index++) {
            const char = str.charAt(index);
            if (index%2!==0 && char!=" ") {
                result = result.concat(char).concat(", ");
                // console.log(char);
                count = count+1;
            }
        }
        console.log(`${result}`);
        console.log(`Total number of odd characters are :${count}`);

    }
    console.log(`3.1.1) "Hard work always pays back"`);
    oddPositionedChars("Hard work always pays back")
    console.log(`3.1.2) "Soon i will be angular IT champ"`);
    oddPositionedChars("Soon i will be angular IT champ")


    console.log(``);

console.log(`------==========Assignment-2==========-------`);

function reverseString(str){
    let result = "";
    for (let index = str.length-1; index>=0; index--) {
        const char = str.charAt(index);
        // console.log(char);
        result = result.concat(char).concat();
    }
    console.log(`   "${result}"`);
}
console.log(` 1.1)Reverse of "Hard work always pays back" is`)
reverseString("Hard work always pays back")
console.log(` 1.2)Reverse of "Soon i will be angular IT champ" is`);
reverseString("Soon i will be angular IT champ")