//Exercise No 26
/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
 and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/

//1st version
let Alien_color:string="Blue"
if(Alien_color==="Blue"){
console.log("\t \n Congrats !,You jusrt earned 5 points ");

}
else{
    console.log("\t \n Congrats! , You just earned 10 points");
    
}
//@nd version
Alien_color="green"
if(Alien_color !=="green")
    {
        console.log("\t \n Congrats !, you just earned 5 points ");
        
    }
    else{
        console.log("\t \n you just earned 10 points");
        
    }