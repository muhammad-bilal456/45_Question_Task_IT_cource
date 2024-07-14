//Exercise No 17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

let Guest_List: string[] = [
  "Fahad",
  "Hashir",
  "Areeb",
  "Noman",
  "Shahnawaz",
  "Bilal "
];

console.log(
  "\n sorry! I can invite only two peoples now because There's shortage of space for peoples\n "
);
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
