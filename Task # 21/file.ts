//Exercise no 21(object)
/*
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.
*/

interface data{

    Name:string,
    Roll_num:number,
    Day:string,
    Timing:string,
    Destination:string,
    teacher:string
}


let Information:data={
Name:" Mohd Bilal Raza",
Roll_num:470259,
Day:"Thursday",
Timing:"7-10",
Destination:"Gov House Sindh",
teacher:"Sir Ali Jawwad"

}
console.log(`\nMy name  is:  ${Information.Name}`);
console.log(`\n My roll num is:  ${Information.Roll_num}`);
console.log(`\n My Day of class is:  ${Information.Day}`);
console.log(`\n Toiming of my class is:  ${Information.Timing}`);
console.log(`\n My Teacher name is: ${Information.teacher}`);





