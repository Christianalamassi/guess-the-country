let startGame = document.getElementById("start_game")
let starts = document.getElementById("start")
let games = document.getElementById("game")



function startTheGame(){
    startGame.style.display='none';
    games.style.display='block';

    window.onbeforeunload = function() {
        return "You may lose your data, are you sure?";
    };
}


starts.addEventListener('click', startTheGame);