//Exrecise No 31
//import from ex no 30
/*
No Users: Add an iftest to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, 
and make sure the correct message is printed.
*/

//empty array 
let user_name:string[]=["admin","Bilal","sadiq","usman"]

user_name.splice(0,user_name.length)

if(user_name.length==0){
console.log("\n Oh no ! List is empty ,We have to find more User\n");
}
//If anu user is present then the else block will be executed
else{
    console.log("\n We have some Users");
    
}

