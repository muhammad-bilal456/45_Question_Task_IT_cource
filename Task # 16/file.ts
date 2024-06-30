// Exercise no 16 

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