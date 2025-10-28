// 👉🏻 https://p5js.org/reference/


const myButton = document.getElementById("myButton");
let randomRColor;
let randomGColor;
let randomBColor;

function setup() {
    // setup run once
    createCanvas(500, 500);
}

function draw() {
    //draw run repeatedly
    background(350);

    // strokeWeight(5);
    // stroke(90,185,125);
    // fill(80,185,75);
    // circle(300,50,100);

    // //noStroke();
    // let randomRColor = random(0,255);
    // let randomGColor = random(0,255);
    // let randomBColor = random(0,255);
    // fill(randomRColor, randomGColor, randomBColor);
    // rect(0,0,mouseX,mouseY);

    //let randomRColor = random(0,255);
    //let randomGColor = random(0,255);
    //let randomBColor = random(0,255);
    fill(randomRColor, randomGColor, randomBColor);
    rect(255,100,100,100);
    circle(300,50,100);
    rect(260,200,25,50);
    rect(323,200,25,50);
    rect(205,125,50,25);
    rect(355,125,50,25);

    fill(255,255,255);
    rect(260,50,20,5);
    rect(315,50,20,5);

    fill(100,75,0);
    arc(300, 85, 50, 50, PI, 0, CHORD);
    
}


myButton.addEventListener("click",function(){
    //do stuffs
    randomRColor = random(0,255);
    randomGColor = random(0,255);
    randomBColor = random(0,255);
    background(randomRColor, randomGColor, randomBColor);
});