console.log(`------------======Assignment-3======------------`);
console.log(`Leap year = year%4===0 && year%100!=0 || year%400===0 `);
console.log(`Comman year = year%400!=0 `);
console.log(``);

var leapYear = function(year) {
    if ( year == 'number' ||year<=0|| isNaN(+year)) {
        console.log(`${year} is Invalid input`);
        
    } else if(year%4===0 && year%100!==0 || year%400===0) {
        console.log(`${year} is leap year`);
    }
    else if(year%400!==0){
        console.log(`${year} is comman year`);
    }
    
   
}
leapYear(1999);
leapYear(2020);
leapYear(1945);
leapYear(1600);
leapYear(2100);
leapYear(2000);
leapYear(2024);
leapYear("1750");
leapYear("Twenty Twenty");
leapYear(null);
leapYear(undefined);
leapYear(2040);