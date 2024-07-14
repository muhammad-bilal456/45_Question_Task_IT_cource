"use strict";
//Exercise No 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwiches(...items) {
    console.log("\nYou ordered a Sandwitch of following Items:\n");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("\n PLease ! enjoy your sandwich\n ");
}
sandwiches("Bread", "Egg", "Chicken");
sandwiches("bun", "garlic", "onion", "Tomato");
sandwiches("cheese", "butter", "chilli", "Mayo", "Ketchup");
