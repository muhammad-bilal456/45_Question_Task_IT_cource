//Exercise # 33
/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
let Ord_Arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Ord_Arr.length; i++) {
  Ord_Arr[i];

  //i=1
  if (Ord_Arr[i] === 1) {
    console.log(`${Ord_Arr[i]}st`);
  }
  //i=2
  else if (Ord_Arr[i] === 2) {
    console.log(`${Ord_Arr[i]}nd`);
  }
  //i=3
  else if (Ord_Arr[i] === 3) {
    console.log(`${Ord_Arr[i]}rd`);
  }
  //i=4
  else if (Ord_Arr[i] === 4) {
    console.log(`${Ord_Arr[i]}th`);
  }
  //i=5
  else if (Ord_Arr[i] === 5) {
    console.log(`${Ord_Arr[i]}th`);
  }
  //i=6
  else if (Ord_Arr[i] === 6) {
    console.log(`${Ord_Arr[i]}th`);
  }
  //i=7
  else if (Ord_Arr[i] === 7) {
    console.log(`${Ord_Arr[i]}th`);
  }
  //i=8
  else if (Ord_Arr[i] === 8) {
    console.log(`${Ord_Arr[i]}th`);
  }
  //i=9
  else if (Ord_Arr[i] === 9) {
    console.log(`${Ord_Arr[i]}th`);
  } else {
    console.log("you entered a  wrong value");
  }
}
