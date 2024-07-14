"use strict";
//Exercise No 17
let Guest_List = ["Fahad", "Hashir", "Areeb", "Noman", "Shahnawaz", "Bilal "];
console.log("\n sorry! I can invite only two peoples now because There's shortage of space for peoples\n ");
while (Guest_List.length > 2) {
    let removed_guest = Guest_List.pop();
    console.log(`Sorry  ${removed_guest}, I can't invite you this time.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`\n Hy ! ${Guest_List[i]} You're still invited on dinner.`);
}
///removing last two names
Guest_List.splice(0, Guest_List.length);
console.log("\n Empty guest list by removing all items:", Guest_List);
