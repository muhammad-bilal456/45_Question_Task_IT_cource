// Exercise no 23 (true or false) 
//given condition
let car = 'subaru';

/*
Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru'
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and
 another 5 tests evaluate to False.
*/


console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

console.log("\n \t five (5) conditions evalutes to true \t \n");

//condition test # 1
console.log("\n \t Is car !== 'Corolla'? I predict True.")
console.log(car!=="Corolla");

//condition test # 2
console.log("\n \t car.length > 3 '? I predict True.")
console.log(car.length>3);

//condition test # 3
console.log("\n \t car starts with keyword (s)? I predict True.")
console.log(car.startsWith("s"));

//condition test # 4
console.log("\n \t Is car ends with keyword (u) ? I predict True.")
console.log(car.endsWith("u"));

//condition test # 5
console.log("\n \t Is car length is <= 6 ? I predict True.")
console.log(car.length<=6);

console.log("\n\t five (5) condition evalutes to False ");

//condition test # 1
console.log("\n \t  Is car == 'Corolla'? I predict False.")
console.log(car=="Corolla");

//condition test # 2
console.log("\n \t car.length > 3 '? I predict FAlse.")
console.log(car.length>6);

//condition test # 3
console.log("\n \t car starts with keyword (S)? I predict False.")
console.log(car.startsWith("S"));

//condition test # 4
console.log("\n \t Is car ends with keyword (U) ? I predict False.")
console.log(car.endsWith("U"));

//condition test # 5

console.log("\n \t Is car == 'Subaru'? I predict False.")
console.log(car == "Subaru")

