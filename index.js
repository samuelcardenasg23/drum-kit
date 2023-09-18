// Detecting button pressed.

// Variable to find out the number of buttons.
var numberOfDrumButtons = document.querySelectorAll(".set .drum").length;

// For loop to iterate through each button calling the function with the addEventListener
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".set .drum")[i].addEventListener("click", handleClick);
}

// Function to do something when the buttons are clicked.
function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// Detecting Keyboard Press.

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey).classList.add("pressed");

    function offButton() { 
        document.querySelector("." + currentKey).classList.remove("pressed");
    }
    setTimeout(offButton, 100);
}