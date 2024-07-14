//Exercise no 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let Magicians_name:string[]=["magicians-1","magicins-2","magicins-3","magicins-4",]

function show_magicians(Magicians_name:string[]){

for(let i=0;i<Magicians_name.length;i++)

{
    
console.log(Magicians_name[i]);
}
}

show_magicians(Magicians_name)