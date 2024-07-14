// Exercise no 16 
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.
*/

// import from exercise 15

let Guest_List: string[] = ["Hashir", "Areeb", "Noman"];

for (let m= 0; m < Guest_List.length; m++) {
    console.log(
      `\n Dear ! ${Guest_List[m]} : \n \t You are Invited to dinner .\n   `
    );
  }
  console.log("Oh Wow  ! I have found a bigger table. So, More peoples ae also  invited to dinner ");
  // adding elemnts in array 
  Guest_List.unshift("Fahad")
  Guest_List.splice(2,0,"Shahnawaz");
  Guest_List.push("Bilal Raza")
//again prints all the guest 
  for (let n= 0; n < Guest_List.length; n++) {
    console.log(
      `\n Dear ! ${Guest_List[n]} : \n \t You are Invited to dinner .\n   `
    );
  }