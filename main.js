
//board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

//dinos
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight 
}

//cactus
 let cactusArray = [];

 let cactus1Width = 34;
 let cactus2Width = 69;
 let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;



window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); // Used for drawing on the board

    //draw intial dino
   //context.fillStyle= "green";
    //context.fillRect(dino.x, dino.y, dino.width, dino.height

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function(){
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    } 

    cactus1Img = new Image();
    cactus1Img = "./img/cactus1.png";

    cactus2Img = new Image();
    cactus2Img = "./img/cactus2.png";

    cactus3Img = new Image();
    cactus3Img = "./img/cactus3.png";

    

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000); //1000 ms = 1sec
    


}

function update(){
    requestAnimationFrame(update);
    //dino
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    //cactus 
    for(let i = 0; i < cactusArray.length; i++){
        let cactus = cactusArray[i];
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
    }
}

function placCactus(){
//place cactus
    let cactus = {
        img : null,
        x: cactusX,
        y: cactusY,
        width : null,
        height : cactusHeight
    }
    let placeCactusChance = Math.random();

    if(placeCactusChance > .90) {//10% chance of getting cactus 3
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if(placeCactusChance > .70) {//30% chance of getting cactus 2
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if(placeCactusChance > .50) {//50% chance of getting cactus 1
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }
}
 