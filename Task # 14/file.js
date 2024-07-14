"use strict";
// Exercise No 14
//Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest_List = ["Hashir", "Areeb", "Noman"];
let l;
for (l = 0; l < Guest_List.length; l++) {
    console.log(`\n Dear ! ${Guest_List[l]} : \n \t You are Invited to dinner .\n   `);
}
