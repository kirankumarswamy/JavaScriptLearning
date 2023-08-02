console.log(`=================Assignment-1===========================`);

const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);
console.log(`The first element is : "${arrayFruits[0]}""`);
console.log(`The last element is : "${arrayFruits[arrayFruits.length-1]}"`);
console.log(`==============================================================`);
arrayFruits.unshift("Papaya");
console.log(`                 Added element "Papaya" before 'Banana'`);
console.log(arrayFruits);
console.log(`================================================================`);
console.log(arrayFruits);
 arrayFruits.splice(4,1)
console.log(`                 Removed "Mango" from the array`);
console.log(arrayFruits);
console.log(`==================================================================`);
arrayFruits.push("Pineapple")
console.log(`                 Added "Pineapple" at last position`);
console.log(arrayFruits);
console.log(`==================================================================`);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(`                 Added "Dragon fruit" before "watermelon"`);
console.log(arrayFruits);
console.log(`==================================================================`);
arrayFruits.splice(2,1,"Kiwi")
console.log(`                 Replaced "Orange" with "Kiwi"`);
console.log(arrayFruits);
console.log(`==================================================================`);
console.log(`       Elements starting from index 1 to 4`);
let elementsAre=arrayFruits.slice(1,5);
console.log(elementsAre);
console.log(`==================================================================`);
console.log(`       Last three elememts by length property`);
let lastThreeElelents=arrayFruits.slice(arrayFruits.length-3)
console.log(lastThreeElelents);