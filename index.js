
function changePageColor() {
    document.body.style.backgroundColor =getRandomColor();
}
//use this function to create a random background to the page
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function defaultBackground() {
    var body = document.body;
    body.style.backgroundColor = "#5c85a1";
}
//show video when the user press the button
function showVideo() {
    var videoPlayer = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');

    // Show the video player
    videoPlayer.style.display = 'flex';
    buttonContainer.innerHTML = '<button id="newButton" class="btn1" onclick="hideVideo()">Hide video</button>';
    playButton.style.display = 'none';
} 

function hideVideo() 
{
    videoPlayer.style.display = 'none';
    buttonContainer.innerHTML = '<button class="btn1" id="playButton" onclick="showVideo()">piano lesson</button>';
    newButton.style.display = 'none';
}

var buttons=document.querySelectorAll(".btn");
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    )}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

var currentAudio; 
function makeSound(key) {
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {
        case 'a':
            currentAudio = new Audio("sounds/do.wav");
            break;
        case 's':
            currentAudio = new Audio("sounds/re.wav");
            break;
        case 'd':
            currentAudio = new Audio("sounds/mi.wav");
            break;
        case 'h':
            currentAudio = new Audio("sounds/fa.wav");
            break;
        case 'j':
            currentAudio = new Audio("sounds/sol.wav");
            break;
        case 'k':
            currentAudio = new Audio("sounds/la.wav");
            break;
        case 'l':
            currentAudio = new Audio("sounds/si.mp3");
            break;
        default:
            alert("You can't make music!");
            return;
    }
    currentAudio.play();
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed"); 
    setTimeout(function(){activeButton.classList.remove("pressed");},150);
}

function changePageColor() {
    document.body.style.backgroundColor =getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function defaultBackground() {
    var body = document.body;
    body.style.backgroundColor = "#5c85a1";
}

function showVideo() {
    var videoPlayer = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');

    // Show the video player
    videoPlayer.style.display = 'flex';
    buttonContainer.innerHTML = '<button id="newButton" class="btn1" onclick="hideVideo()">Hide video</button>';
    playButton.style.display = 'none';
} 

function hideVideo() 
{
    videoPlayer.style.display = 'none';
    buttonContainer.innerHTML = '<button class="btn1" id="playButton" onclick="showVideo()">piano lesson</button>';
    newButton.style.display = 'none';
}

