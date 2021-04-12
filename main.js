canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_Img = "mars.jpg";
rover_Img = "rover.png";
rover_X = 10;
rover_Y = 10;

function add() {
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_Img;

    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadRover;
    rover_ImgTag.src = rover_Img;
}

function uploadBackground() {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_ImgTag, 0, 0, canvas.width, canvas.height);
}