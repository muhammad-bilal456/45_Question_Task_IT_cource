"use strict";
//Exrecise No 31
//import from ex no 30
//empty array 
let user_name = ["admin", "Bilal", "sadiq", "usman"];
user_name.splice(0, user_name.length);
if (user_name.length == 0) {
    console.log("\n Oh no ! List is empty ,We have to find more User\n");
}
//If anu user is present then the else block will be executed
else {
    console.log("\n We have some Users");
}
