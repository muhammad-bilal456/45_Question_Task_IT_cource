"use strict";
//Exercise No 30
/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let user_name = ["Admin", "Bilal", "fahad", "Usman", "Sadiq"];
// [i] indicating indexing position which is zero
for (let i = 0; i < user_name.length; i++) {
    // the first index no is zero and admin is also on zero index no
    if (user_name[i] === "Admin") {
        console.log("\n Hello , Admin would you like to see a status report ?");
    }
    else {
        console.log(`\n Hello , ${user_name[i]} Thank you for logging in again. `);
    }
}
