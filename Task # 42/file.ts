//Exercise No 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Import from Ex 41
let Magicians_name:string[]=["magicians-1","magicins-2","magicins-3","magicins-4",]

function show_magicians(Magicians:string[]){
for(let i=0;i<Magicians_name.length;i++){
     console.log( Magicians_name[i]);
   
}
}
//2nd function 
function make_great(magicians:string[]){
    return magicians.map(Magicians_name=>`The Great ${Magicians_name}`)
}

let great_magicians=make_great(Magicians_name);
console.log(great_magicians);
