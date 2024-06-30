//Exercise No 30
let user_name:string[]=["Admin","Bilal","fahad","Usman","Sadiq"]
// [i] indicating indexing position which is zero
for(let i=0; i<user_name.length; i++){
// the first index no is zero and admin is also on zero index no
    if(user_name[i]==="Admin")
{
    console.log("\n Hello , Admin would you like to see a status report ?");
    
}
else{
    console.log(`\n Hello , ${user_name[i]} Thank you for logging in again. `);
    
}




    }