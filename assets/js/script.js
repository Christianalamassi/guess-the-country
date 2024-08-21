let startGame = document.getElementById("start_game");
let starts = document.getElementById("start");
let games = document.getElementById("game");
let image = document.getElementById('img');
let input = document.getElementById('country');
let helps = document.getElementById('help');
let nexts = document.getElementById('next');

// To start the game
function startTheGame(){
    startGame.style.display='none';
    games.style.display='block';
    image.style.display='block';

    //To prevent the user to refresh the page without knowing that the data will be lost
    window.onbeforeunload = function() {
        return "You may lose your data, are you sure?";
    };
}

function firstLetter(){
    const src = image.src;
    const file = src.substring(src.lastIndexOf('/') + 1); // Extract file name
    const letter = file.charAt(0).toUpperCase(); // Get the first letter
    helps.addEventListener('click', function(){
        M.toast({html: `The first letter is ${letter}`})
    });
}

starts.addEventListener('click', startTheGame);
firstLetter()

