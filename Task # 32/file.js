"use strict";
//Exercise No 32
/*
hecking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let Current_users = ["Bilal", "Fahad", "Usman", "Ali", "Raza"];
let New_Users = ["Bilal", "Jawwad", "Usman", "Sadiq", "Saim",];
for (const newusers of New_Users) {
    let lowerCsae_newusers = newusers.toLowerCase();
    if (Current_users.map(currentcusers => currentcusers.toLowerCase()).includes(lowerCsae_newusers)) {
        console.log(`\n  User ${newusers} needs to Enter a new Username `);
    }
    else {
        console.log(`\n The Username ${newusers} is Available`);
    }
}
