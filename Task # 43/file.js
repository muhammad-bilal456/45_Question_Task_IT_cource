"use strict";
//Exercise No 43
let Magicians_name = ["magician-1", "magician-2", "magician-3", "magician-4",];
function show_magicians(Magicians_name) {
    for (let i = 0; i < Magicians_name.length; i++) {
        console.log(Magicians_name[i]);
    }
}
//2nd function 
function make_great(magicians) {
    return magicians.map(Magicians_name => `The Great ${Magicians_name}`);
}
let copy_magicians_name = Magicians_name.slice();
let copy_great_magicians = make_great(copy_magicians_name);
console.log("\n\t ......Original Array.....\n");
show_magicians(Magicians_name);
console.log("\n\t ......Coppied Array..... \n");
show_magicians(copy_great_magicians);
