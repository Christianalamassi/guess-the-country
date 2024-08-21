let startGame = document.getElementById("start_game");
let starts = document.getElementById("start");
let games = document.getElementById("game");
let image = document.getElementById('img');

let helps = document.getElementById('help');
let nexts = document.getElementById('next');


game()

/*The game*/
function game(){
    starts.addEventListener('click', startTheGame);
    firstLetter()
    nextImage()
    inputCorrect()
}

/*To start the game*/
function startTheGame(){

    //to hide the start panel and diplay the game
    startGame.style.display='none';

    /*To prevent the user to refresh the page 
    without knowing that the data will be lost*/
    window.onbeforeunload = function() {
        return "You may lose your data, are you sure?";
    };
    games.style.display='block';
    image.style.display='block';
}

/*The help button where it displays first letter to the user*/
function firstLetter(){
    const src = image.src;
    const file = src.substring(src.lastIndexOf('/') + 1); // Extract file name
    const letter = file.charAt().toUpperCase(); // Get the first letter
    helps.addEventListener('click', function(){
        M.toast({html: `The first letter is ${letter}`})
    });
}

/* For the next image */
function nextImage(){
    nexts.addEventListener('click', function(){
        let randomImage = Math.floor(Math.random() * 261) + 1; // Generate a random number between 1 and 261
        image.src = `assets/images/${randomImage}.jpg`; // Update the image source to a new random image
    });
}

function inputCorrect(){
    const inputs = document.getElementById('input').value;
    console.log(inputs)
}
