"use strict";
//exercise no 15
// import same code  from Exercise 14 
let Guest_List = ["Hashir", "Areeb", "Noman"];
for (let l = 0; l < Guest_List.length; l++) {
    console.log(`\n Dear ! ${Guest_List[l]} : \n \t You are Invited to dinner .\n   `);
}
console.log(`\nOh no ! Unfortunately  ${Guest_List[2]} Can't come \n  `);
Guest_List[2] = "Bilal";
console.log("So,some new guest are invited to dinner \n ");
// for inviting new members
for (let m = 0; m < Guest_List.length; m++) {
    console.log(`\n Dear ! ${Guest_List[m]} : \n \t You are Invited to dinner .\n   `);
}
