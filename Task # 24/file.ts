//Exercise No 24
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to
• Tests using "and" and "or" operator
• Test whether an item is in a array
• Test whether an item is not in a array
*/



let Str_1: string = "Bilal";
let Str_2: string = "Raza";
let Num_1: number = 20;
let Num_2: number = 25;
let Arr = [2, 4, 6, 8, 10];

// Test 01 (string Testing)
console.log("\n \t Tests for equality and inequality with strings\n");

console.log(Str_1 == "Bilal"); // True
console.log(Str_1 == Str_2); // False

//Test 02 (lower case function)
console.log("\n \t Tests using the lower case function \n");
console.log(Str_1.toLowerCase() !== "Bilal"); // True
console.log(Str_2.toLowerCase() == "RAZA"); //false

//Test 03(numerical test)
console.log(
  "\n \t Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to \n ");
console.log(1<2);//True
console.log(Num_1==Num_2)//False;
console.log(Num_1<20);//false
console.log(Num_2>Num_1);//True

//Test 04 (and ,Or Op)
console.log("\n \t Tests using and(&&) and or(||) operators \n");
console.log((Num_1 >5) || (Num_2 < 20));//True
console.log ((Num_1<=20) && (Num_2>25));//False

console.log("\n \t Test using array");

//Test 05 (item of array)
console.log(Arr.includes(3));//False
console.log(Arr.includes(2));//true





