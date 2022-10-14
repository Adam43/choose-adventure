//Create the story.
//BEGIN//
//"You have discovered a cave. Do you want to walk in?"


alert("Hello");
//output Hello
let name = prompt("I SAID HELLO, CHOSEN ONE! SPEAK YOUR NAME!");
//input is saved under the name variable
alert(`Welcome ${name}! Welcome to your Journey which you will choose...`);
//string and var is outputted 
alert("I will be the one to narrate your life. Now begin your perils!")
let enterCave = confirm(name + ", it has seem that you have stubbled upon a cave. Do you want to walk in?");
//alert(enterCave)
// give user the option to confirm thier choice 
//Story 1.1
if (enterCave === true) { //START 1.1.0
   alert("You have choosen to go in! You are scared but brave and went in.");

   let lightChoice = prompt("Now that you're in the cave you see that there are 3 flashlights to chose from. A 'medieval lighter', 'flash light', and 'iphone'. Which one do you choose?");
   
   if (lightChoice.tolowerCase() === "medieval lighter") { //1.2.0
       alert("Cool, this is like the movies!");
       alert("*Turn Lights On*");

       let medievalLighter = confirm("Do you want to use the flash light")

       if (medievalLighter.toLowerCase() === 'ok'){  //1.3.0
           alert("OH MY GOSHHH THERE'S A NASTY GROUP OF DARK WIZARDS")
           alert("*EVIL DARK WIZARDS ATTACK*....CONFRINGO!!")
       }else if (medievalLighter === false){ //END LOOP 1.3.0
           alert("WOAH IS THAT MAGIC??")
           alert("AHHHH X(")
        }
    }else if (lightChoice.tolowerCase() === "flash light") { //1.2.1
        alert("This will do!")
        
        let flashLight = confirm("Do you want to flick that flash light?")

        if (flashLight === true){ //1.3.1
            alert("WOAHHH IT'S A DANCE PARTY!! :D")
        }else if(flashLight === false) { //END LOOP 1.3.1
            alert("WHAT IS THAT LOUD MUSIC PLAYING???") 
            } 
    } else if (lightChoice.toLowerCase() == "iphone"){ //1.2.2
        alert("Damn this on 10%")
        
        let iphoneLight = confirm("Do you want to click the light button?")
        
        if(iphoneLight === true){ // 1.3.2
            alert("OH NO! I'M SURRONDED BY ANDRIOD USERS!!")
        }else if (iphoneLight === false){ //END LOOP 1.3.2
            alert("So many green bubbles shinning in the dark X(")
        }
    }
} else if (enterCave === false){ // 2.1.0
    alert("You have decided to turn away and head to the woods because you are too terrified."); //START 2.2.0

    let weapon = prompt("The moon light has spot lightend you some weapons for your trip. There is 'umbrella', 'twinky' or a 'bag of poop'...choose ONE!")

    if (weapon.tolowerCase() === "umbrella"){ //

    }

}

// let spotChest = confirm("Is that a treasure chest you see?")
// alert(spotChest)
// if(spotChest == true){
//     let = treasureChest = prompt("Go on open it.")
// }else { 
//     let = treasureChest = prompt("You aren\'t adventurous at all smh")
// }
//let treasureChest = prompt("Go on open it.")