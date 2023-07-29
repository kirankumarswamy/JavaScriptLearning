console.log(``);
console.log(`====================Assignment-3====================`);
function gradeCalculation (marks){
    var marksValue = +marks;
        if (marks>=90 && marks <=100) {
            console.log(`Excellent, Your marks are ${marks} and grade is "A+"`);
        } else {
            if (marks>=75 && marks <90) {
                console.log(`Excellent, Your marks are ${marks} and grade is "A"`);
            } else {
                if (marks>=50 && marks <75) {
                    console.log(`good, Your marks are ${marks} and grade is "B"`);
                } else {
                    if (marks>=35 && marks<50) {
                    console.log(`Your marks are ${marks} and grade is "c" you need improvement`);
                    } 
                        else {
                            if (marks>=1 && marks<35) {
                            console.log(`Your marks  is ${marks} and you are failed`);
                            
                        }        else {
                            (marks <=0 || marks>100 || isNaN(marksValue)) 
                            console.log(`You Entered ${marks}, Please provide valid marks`);
                        }
                    
                    }
                }
            }
        }
    }

gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(98)
gradeCalculation(90)
gradeCalculation(80)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(-7)
gradeCalculation("91")
gradeCalculation("Eighty")
gradeCalculation("undefined")
gradeCalculation("null")