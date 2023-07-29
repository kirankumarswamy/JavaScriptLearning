
console.log(``);
console.log(`--------Assignment-1--------`);
 var monthOfYear = function (monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`Month ${monthNumber} is January`);
            break;
        case 2:
            console.log(`Month ${monthNumber} is February`);
            break;
        case 3:
            console.log(`Month ${monthNumber} is March`);
            break;
        case 4:
            console.log(`Month ${monthNumber} is April`);
            break;
        case 5:
            console.log(`Month ${monthNumber} is May`);
            break;
        case 6:
            console.log(`Month ${monthNumber} is June`);
            break;
        case 7:
            console.log(`Month ${monthNumber} is July`);
            break;
        case 8:
            console.log(`Month ${monthNumber} is August`);
            break;
        case 9:
            console.log(`Month ${monthNumber} is September`);
            break;
        case 10:
            console.log(`Month ${monthNumber} is October`);
            break;
        case 11:
            console.log(`Month ${monthNumber} is November`);
            break;
        case 12:
            console.log(`Month ${monthNumber} is December`);
            break;
    
        default:
            console.log(`You entered ${monthNumber},please enter valid input`);
            break;
    }
}
monthOfYear(5);
monthOfYear(7);
monthOfYear(2);
monthOfYear(9);
monthOfYear(12);
monthOfYear(0);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

