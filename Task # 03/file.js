"use strict";
//Exercise no 3
let Name = "mOhd bilAl raZA";
console.log(`\n Real name is :\t${Name}`);
//To lower case
console.log(`\n Name in lower case is : \t ${Name.toLowerCase()}`);
//To upper case
console.log(`\n Name  in Uppper case is :\t   ${Name.toUpperCase()}`);
//to tile case
//conver string  in to array
let step1 = Name.split(' ');
// Convert Letter at )index to uppercase and Left to tolower case
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
//Again convert array to string
let step3 = step2.join(' ');
console.log(`\n Name in Title Case is : \t ${step3}`);
