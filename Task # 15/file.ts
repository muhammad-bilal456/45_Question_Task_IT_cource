//exercise no 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

// import same code  from Exercise 14 

let Guest_List: string[] = ["Hashir", "Areeb", "Noman"];
for (let l= 0; l < Guest_List.length; l++) {
  console.log(
    `\n Dear ! ${Guest_List[l]} : \n \t You are Invited to dinner .\n   `
  );
}
console.log(`\nOh no ! Unfortunately  ${Guest_List[2]} Can't come \n  `);

Guest_List[2]="Bilal";

console.log("So,some new guest are invited to dinner \n ");

// for inviting new members
for (let m= 0; m < Guest_List.length; m++) {
  console.log(
    `\n Dear ! ${Guest_List[m]} : \n \t You are Invited to dinner .\n   `
  );
}
