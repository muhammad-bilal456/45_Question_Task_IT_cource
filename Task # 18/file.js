"use strict";
//Exercise no 18
/*  Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
let places = ["Paris", "Muesium of future", "Taj Mahal", "Italy", "China"];
//original array
console.log("\n original Array:", places);
let alphabetical_array = places.slice().sort();
console.log("\n Array in Alphabetical order:", alphabetical_array);
//showing that array is still in its original form
console.log("\n Showing that array is in still original position:", places);
//aray in reversible order;
let reverse_alphabetical_array = places.slice().sort().reverse();
console.log("\n Array in  reverse-Alphabetical-order:", reverse_alphabetical_array);
//showing that array is still in its original form
console.log("\n Showing that array is still in  original position:", places);
//showing that array changed its original order
places.reverse();
console.log("\n Showing that array changed its  original order:", places);
//showing that array is still in its original form by reverse it gain
places.reverse();
console.log("\n Showing that array return back to its  original  order:", places);
// Sort your array so it’s stored in alphabetical order.
places.sort();
console.log("\n Showing that array stored in Alphabetical order:", places);
//• Sort to change your array so it’s stored in reverse alphabetical order.
places.sort().reverse();
console.log("\n Showing that array stored in reverse Alphabetical order:", places);
