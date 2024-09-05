let startGame = document.getElementById("start_game");
let starts = document.getElementById("start");
let games = document.getElementById("game");
let image = document.getElementById('img');

let helps = document.getElementById('help');
let nexts = document.getElementById('next');

let randomImage = 0; // To keep track of the current image

// Array of image filenames in your assets folder
const imageFilenames = [
    'afghanistan0.jpg', 'afghanistan1.jpg', 'afghanistan2.jpg', 'albania0.jpg', 'albania1.jpg',
    'algeria0.jpg', 'algeria1.jpg', 'algeria2.jpg', 'algeria3.jpg', 'argentina0.jpg', 'argentina1.webp',
    'argentina2.jpg', 'armenia0.jpg', 'armenia1.jpg', 'armenia2.jpg', 'armenia3.jpg', 'armenia4.jpg',
    'australia0.jpg', 'australia1.jpg', 'australia2.jpeg', 'australia3.jpg', 'australia4.webp',
    'austria1.jpg', 'austria2.jpg', 'belgium0.webp', 'belgium1.webp', 'brazil0.jpeg', 'brazil1.jpg',
    'brazil2.jpg', 'brazil3.jpg', 'bulgaria0.webp', 'bulgaria1.jpeg', 'bulgaria2.jpg', 'canada0.jpg',
    'canada1.jpeg', 'canada2.jpeg', 'canada3.jpg', 'canada4.jpg', 'chad0.jpg', 'chad1.jpg', 'chad2.jpg',
    'chile0.jpg', 'chile1.jpg', 'chile2.jpg', 'china6.jpg', 'china0.jpg', 'china1.jpg', 'china2.jpeg',
    'china3.jpg', 'china4.jpg', 'china5.jpg', 'colombia0.jpg', 'colombia1.jpg', 'congo0.jpg',
    'congo1.jpeg', 'congo2.jpeg', 'croatia0.jpg', 'croatia1.jpg', 'croatia2.jpg', 'cuba0.jpeg',
    'cuba1.jpeg', 'cuba2.jpeg', 'cuba3.jpg', 'cyprus1.jpeg', 'cyprus2.jpeg', 'cyprus3.jpg',
    'denmark0.jpeg', 'denmark1.jpg', 'denmark2.webp', 'ecuador0.jpg', 'ecuador1.jpg', 'egypt0.jpg',
    'egypt1.webp', 'egypt2.png', 'egypt3.png', 'egypt4.jpg', 'england0.jpg', 'england1.jpg', 'england2.jpg',
    'england3.png', 'england4.jpg', 'finland0.jpeg', 'finland1.jpeg', 'finland2.jpeg', 'france0.jpg',
    'france1.jpg', 'france3.jpeg', 'france4.jpeg', 'georgia0.jpg', 'germany0.jpeg', 'germany1.jpeg',
    'germany2.jpeg', 'ghana0.jpg', 'greece0.jpg', 'greece1.jpg', 'greece2.webp', 'greece3.webp',
    'greenland0.jpg', 'greenland1.jpeg', 'hungary0.jpg', 'iceland0.jpg', 'iceland1.webp', 'iceland2.webp',
    'india0.jpg', 'india1.jpg', 'india2.jpg', 'ireland1.jpeg', 'ireland2.jpg', 'ireland3.jpeg',
    'ireland4.jpeg', 'israel0.jpg', 'israel1.jpg','italy0.jpg','italy1.jpg','italy2.webp',
    'italy3.webp','italy4.webp','japan0.webp','japan1.webp','japan2.jpg','japan3.webp','japan4.webp',
    'japan4.jpg','jordan0.jpg','jordan1.jpeg','jordan2.jpg','kazakhstan0.jpg','kazakhstan1.jpg',
    'kazakhstan2.jpeg','kazakhstan3.jpg','kazakhstan4.jpg','libya0.jpg','libya1.jpg','libya2.jpg',
    'libya3.jpg','lithuania0.jpg','lithuania1.jpg','luxembourg0.jpg','madagascar0.jpg','madagascar1.webp',
    'malawi0.jpg','malawi1.jpg','malta0.webp','malta1.webp','mexico0.jpg','mexico0.jpg','mexico1.jpeg','mexico2.jpeg',
    'mexico3.jpg','burma0.jpg','burma1.jpg','moldova0.jpg','moldova1.jpg','moldova2.jpg',
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
    const inputs = document.getElementById('input');

        // inputs.style.color="#3ec408";
        // inputs.style.color="#e1531a";  
        
}
