//Exercise No 29
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like bananas!
*/
var Arr = ["Orange", "Pineapple", "Grapes"];
if (Arr.includes("Orange")) {
    console.log("\n I really  Like Orange\n");
}
if (Arr.includes("Pineapple")) {
    console.log("I  really Like Pineapple\n ");
}
if (Arr.includes("Grapes")) {
    console.log("I really  Like Grapes\n ");
}
if (Arr.includes("Guava")) {
    console.log(" I don't Like Guava");
}
if (Arr.includes("Kiwi")) {
    console.log("I don't  Like Kiwi");
}
