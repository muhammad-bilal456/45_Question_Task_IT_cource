//Exercise no 3
//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let Name:string="mOhd bilAl raZA";
console.log(`\n Original  name is :\t${Name}`);

//To lower case
console.log(`\n Name in lower case is :  ${Name.toLowerCase()}`);

//To upper case
console.log(`\n Name  in Uppper case is :  ${Name.toUpperCase()}`);

//to tile case
//conver string  in to array
let step1=Name.split(' ')
// Convert Letter at (0) index to uppercase and Left to tolower case
let step2=step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
//Again convert array to string
let step3=step2.join(' ')


console.log(`\n Name in Title Case is :  ${step3}`);

