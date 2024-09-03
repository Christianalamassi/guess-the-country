let startGame = document.getElementById("start_game");
let starts = document.getElementById("start");
let games = document.getElementById("game");
let image = document.getElementById('img');

let helps = document.getElementById('help');
let nexts = document.getElementById('next');

let randomImage = 0; // To keep track of the current image

// Array of image filenames in your assets folder
const imageFilenames = [
    'afghanistan.jpg',
    'afghanistan1.jpg',
    'afghanistan2.jpg',
    'albania.jpg',
    'albania1.jpg',
    'algeria.jpg',
    'algeria1.jpg',
    'algeria2.jpg',
    'algeria3.jpg',
    'argentina.jpg',
    'argentina1.webp',
    'argentina2.jpg',
    'armenia.jpg',
    'armenia1.jpg',
    'armenia2.jpg',
    'armenia3.jpg',
    'armenia4.jpg',
    'australia.jpg',
    'australia1.jpg',
    'australia2.jpeg',
    'australia3.jpg',
    'australia4.webp',
    'austria1.jpg',
    'austria2.jpg',

    // Add all the image filenames here
];

game()

/*The game*/
function game(){
    starts.addEventListener('click', startTheGame);
    randomImage = Math.floor(Math.random() * imageFilenames.length) + 1; // Generate a random number between 1 and 261
    image.src = `assets/images/${imageFilenames[randomImage]}`; // Update the image source to a new random image
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
function firstLetter() {
    helps.addEventListener('click', function() {
        const filename = imageFilenames[randomImage];
        const letter = filename.charAt(0).toUpperCase(); // Get the first letter of the current image filename
        M.toast({html: `The first letter is ${letter}`});
    });
}

/* For the next image */
function nextImage(){
    nexts.addEventListener('click', function(){
        randomImage = Math.floor(Math.random() * imageFilenames.length) + 1; // Generate a random number between 1 and 261
        image.src = `assets/images/${imageFilenames[randomImage]}`; // Update the image source to a new random image
    });
}

function inputCorrect(){
    const inputs = document.getElementById('input').value;
    console.log(inputs)
}
