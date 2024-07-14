"use strict";
//Exercise No 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", text = "I Love Typescript") {
    console.log(`\n The size is  ${size} , and Message on shirt is ${text}`);
}
// default parameters so we dont have to give arguments
make_shirt();
//size is changed
make_shirt("Medium");
//both arguments were given by user
make_shirt("Small", "\"Kamran Tessori is a Gem\"");
