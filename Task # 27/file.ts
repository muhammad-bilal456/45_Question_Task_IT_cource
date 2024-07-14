//Exreuie No 27
/*
lien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program,
 making sure each message is printed for the appropriate color alien.
*/ 
//version 1

let alien_color="green"
if(alien_color==="green")
    {
        console.log("\t \n You just earned 5 points Bcz alien color is green");
        
    }

    else if(alien_color=="yellow")
        {
            console.log("\t \nYou just earned 10 points Bcz alien color is yellow ");
            
        }

 //else is red color 

        else  {
            console.log("\t \n You just earned 15 points Bcz alien color is red");
            
        }
//version 2
 alien_color="yellow"
 
 if(alien_color==="green")
    {
        console.log("\t \n You just earned 5 points Bcz alien color is green ");
        
    }
   
    else if(alien_color=="yellow")
        {
            console.log("\t \n You just earned 10 points Bcz alien color is yellow");
            }

 //else is red color
       
        else  {
            console.log("\t \n You just earned 15 points Bcz alien color is red" );
            
        }
//versin 3
        alien_color="red"
 
        if(alien_color==="green")
           {
               console.log("\t \n You just earned 5 points Bcz alien color is green");
               
           }
          
           else if(alien_color=="yellow")
               {
                   console.log("\t \n You just earned 10 points Bcz alien color is yellow");
                   }
       
        //else is red color
              
               else  {
                   console.log("\t \n You just earned 15 points Bcz alien color is red");
                   
               }
       
       